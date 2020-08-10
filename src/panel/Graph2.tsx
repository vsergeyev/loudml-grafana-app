// Libraries
import _ from 'lodash';
import $ from 'jquery';
import tinycolor from 'tinycolor2';
import React, { PureComponent } from 'react';
import uniqBy from 'lodash/uniqBy';
import flattenDeep from 'lodash/flattenDeep';
import cloneDeep from 'lodash/cloneDeep';

import appEvents from 'grafana/app/core/app_events';
import { getDataSourceSrv, getBackendSrv } from '@grafana/runtime';
import { getValueFormat, formattedValueToString, AnnotationEvent, DataSourceApi, AppEvents } from '@grafana/data';
import { Graph, OK_COLOR, ALERTING_COLOR, NO_DATA_COLOR, PENDING_COLOR, DEFAULT_ANNOTATION_COLOR, REGION_FILL_ALPHA } from '@grafana/ui';

export class Graph2 extends Graph {
  dashboard: any;
  datasourcePromises: any;
  globalAnnotationsPromise: any;
  annotations: AnnotationEvent[];

  constructor(props) {
    super(props);

    const promises = [];
    const dsPromises = [];
    const range = props.timeRange;
    this.annotations = [];

    if (props.panelChrome) {
      this.dashboard = props.panelChrome.props.dashboard;

      Promise.all([this.getGlobalAnnotations(range)])
        .then(results => {
          this.annotations = flattenDeep(results[0]);
          // filter out annotations that do not belong to requesting panel
          this.annotations = this.annotations.filter(item => {
            // if event has panel id and query is of type dashboard then panel and requesting panel id must match
            if (item.panelId && item.source.type === 'dashboard') {
              return item.panelId === props.panelChrome.props.panel.id;
            }
            return true;
          });

          this.annotations = this.dedupAnnotations(this.annotations);
          this.draw();
        })
        .catch(err => {
          if (!err.message && err.data && err.data.message) {
            err.message = err.data.message;
          }
          console.log('AnnotationSrv.query error', err);
          appEvents.emit(AppEvents.alertError, ['Annotation Query Failed', err.message || err]);
          return [];
        });
    }
  }

  getGlobalAnnotations(range: any) {
    const promises = [];
    const dsPromises = [];

    for (const annotation of this.dashboard.annotations.list) {
      if (!annotation.enable) {
        continue;
      }

      if (annotation.snapshotData) {
        return this.translateQueryResult(annotation, annotation.snapshotData);
      }

      const datasourcePromise = getDataSourceSrv().get(annotation.datasource);
      dsPromises.push(datasourcePromise);
      promises.push(
        datasourcePromise
          .then((datasource: DataSourceApi) => {
            // issue query against data source
            return datasource.annotationQuery({
              range,
              rangeRaw: range.raw,
              annotation: annotation,
              dashboard: this.dashboard,
            });
          })
          .then(results => {
            // store response in annotation object if this is a snapshot call
            if (this.dashboard.snapshot) {
              annotation.snapshotData = cloneDeep(results);
            }
            // translate result
            return this.translateQueryResult(annotation, results);
          })
      );
    }

    this.datasourcePromises = Promise.all(dsPromises);
    this.globalAnnotationsPromise = Promise.all(promises);
    return this.globalAnnotationsPromise;
  }

  dedupAnnotations(annotations: any) {
    let dedup = [];

    // Split events by annotationId property existence
    const events = _.partition(annotations, 'id');

    const eventsById = _.groupBy(events[0], 'id');
    dedup = _.map(eventsById, eventGroup => {
      if (eventGroup.length > 1 && !_.every(eventGroup, this.isPanelAlert)) {
        // Get first non-panel alert
        return _.find(eventGroup, event => {
          return event.eventType !== 'panel-alert';
        });
      } else {
        return _.head(eventGroup);
      }
    });

    dedup = _.concat(dedup, events[1]);
    return dedup;
  }

  isPanelAlert(event: { eventType: string }) {
    return event.eventType === 'panel-alert';
  }

  translateQueryResult(annotation: any, results: any) {
    // if annotation has snapshotData
    // make clone and remove it
    if (annotation.snapshotData) {
      annotation = cloneDeep(annotation);
      delete annotation.snapshotData;
    }

    for (const item of results) {
      item.source = annotation;
      item.isRegion = item.timeEnd && item.time !== item.timeEnd;
    }

    return results;
  }

  tickFormatter(val, axis) {
    const formatter = getValueFormat('short');

    if (!formatter) {
      throw new Error(`Unit '${format}' is not supported`);
    }
    return formattedValueToString(formatter(val, axis.tickDecimals, axis.scaledDecimals));
  }

  getYAxes(series: GraphSeriesXY[]) {
    if (series.length === 0) {
      return [{ show: true, min: -1, max: 1 }];
    }
    return uniqBy(
      series.map(s => {
        const index = s.yAxis ? s.yAxis.index : 1;
        const min = s.yAxis && !isNaN(s.yAxis.min as number) ? s.yAxis.min : null;
        const tickDecimals = s.yAxis && !isNaN(s.yAxis.tickDecimals as number) ? s.yAxis.tickDecimals : null;
        return {
          show: true,
          index,
          position: index === 1 ? 'left' : 'right',
          min,
          tickDecimals,
          tickFormatter: this.tickFormatter,
        };
      }),
      yAxisConfig => yAxisConfig.index
    );
  }

  getFillGradient(amount: number) {
    if (!amount) {
      return null;
    }

    return {
      colors: [{ opacity: 0.0 }, { opacity: amount / 10 }],
    };
  }

  translateFillOption(fill: number) {
    if (this.props.stack) {
      return fill === 0 ? 0.001 : fill / 10;
    } else {
      return fill / 10;
    }
  }

  draw() {
    if (this.element === null) {
      return;
    }

    const {
      width,
      series,
      timeRange,
      showLines,
      showBars,
      showPoints,
      isStacked,
      lineWidth,
      fill,
      fillGradient,
      timeZone,
      onHorizontalRegionSelected,
    } = this.props;

    if (!width) {
      return;
    }

    const ticks = width / 100;
    const min = timeRange.from.valueOf();
    const max = timeRange.to.valueOf();
    const yaxes = this.getYAxes(series);

    const flotOptions: any = {
      legend: {
        show: false,
      },
      series: {
        stack: isStacked,
        lines: {
          show: showLines,
          fill: this.translateFillOption(fill),
          fillColor: this.getFillGradient(fillGradient),
          lineWidth: lineWidth,
          zero: false,
        },
        points: {
          show: showPoints,
          fill: 1,
          fillColor: false,
          radius: 2,
        },
        bars: {
          show: showBars,
          fill: 1,
          // Dividig the width by 1.5 to make the bars not touch each other
          barWidth: showBars ? this.getBarWidth() / 1.5 : 1,
          zero: false,
          lineWidth: lineWidth,
        },
        shadowSize: 0,
      },
      xaxis: {
        show: true,
        mode: 'time',
        min: min,
        max: max,
        label: 'Datetime',
        ticks: ticks,
        timeformat: timeFormat(ticks, min, max),
        timezone: timeZone ?? DefaultTimeZone,
      },
      yaxes,
      grid: {
        minBorderMargin: 0,
        markings: [],
        backgroundColor: null,
        borderWidth: 0,
        hoverable: true,
        clickable: true,
        color: '#a1a1a1',
        margin: { left: 0, right: 0 },
        labelMarginX: 0,
        mouseActiveRadius: 30,
      },
      selection: {
        mode: onHorizontalRegionSelected ? 'x' : null,
        color: '#666',
      },
      crosshair: {
        mode: 'x',
      },
    };

    this.addFlotEvents(this.annotations, flotOptions);

    try {
      $.plot(
        this.element,
        series.filter(s => s.isVisible),
        flotOptions
      );
    } catch (err) {
      console.log('Graph rendering error', err, flotOptions, series);
      throw new Error('Error rendering panel');
    }
  }

  render() {
    const { height, width, series } = this.props;
    const noDataToBeDisplayed = series.length === 0;
    const tooltip = this.renderTooltip();
    const context = this.renderContextMenu();
    return (
      <div className="graph-panel">
        <div
          className="graph-panel__chart"
          ref={e => (this.element = e)}
          style={{ height, width }}
          onMouseLeave={() => {
            this.setState({ isTooltipVisible: false });
          }}
        />
        {noDataToBeDisplayed && <div className="datapoints-warning">No data</div>}
        {tooltip}
        {context}
      </div>
    );
  }

  addFlotEvents(annotations: any, flotOptions: any) {
    if (!annotations) {
      return;
    }

    const types: any = {
      $__alerting: {
        color: ALERTING_COLOR,
        position: 'BOTTOM',
        markerSize: 5,
      },
      $__ok: {
        color: OK_COLOR,
        position: 'BOTTOM',
        markerSize: 5,
      },
      $__no_data: {
        color: NO_DATA_COLOR,
        position: 'BOTTOM',
        markerSize: 5,
      },
      $__pending: {
        color: PENDING_COLOR,
        position: 'BOTTOM',
        markerSize: 5,
      },
      $__editing: {
        color: DEFAULT_ANNOTATION_COLOR,
        position: 'BOTTOM',
        markerSize: 5,
      },
    };

    // annotations from query
    annotations.map(item => {
      // add properties used by jquery flot events
      item.min = item.time;
      item.max = item.time;
      item.eventType = item.source.name;

      if (item.newState) {
        item.eventType = '$__' + item.newState;
      } else {
        if (!types[item.source.name]) {
          types[item.source.name] = {
            color: item.source.iconColor,
            position: 'BOTTOM',
            markerSize: 5,
          };
        }
      }
    });

    const regions = getRegions(annotations);
    addRegionMarking(regions, flotOptions);

    const eventSectionHeight = 20;
    const eventSectionMargin = 7;
    flotOptions.grid.eventSectionHeight = eventSectionMargin;
    flotOptions.xaxis.eventSectionHeight = eventSectionHeight;

    flotOptions.events = {
      levels: _.keys(types).length + 1,
      data: annotations,
      types: types,
      manager: this,
    };
  }
}

function getRegions(events: AnnotationEvent[]) {
  return _.filter(events, 'isRegion');
}

function addRegionMarking(regions: any[], flotOptions: { grid: { markings: any } }) {
  const markings = flotOptions.grid.markings;
  const defaultColor = DEFAULT_ANNOTATION_COLOR;
  let fillColor;

  _.each(regions, region => {
    if (region.source) {
      fillColor = region.source.iconColor || defaultColor;
    } else {
      fillColor = defaultColor;
    }

    fillColor = addAlphaToRGB(fillColor, REGION_FILL_ALPHA);
    markings.push({
      xaxis: { from: region.min, to: region.timeEnd },
      color: fillColor,
    });
  });
}

function addAlphaToRGB(colorString: string, alpha: number): string {
  const color = tinycolor(colorString);
  if (color.isValid()) {
    color.setAlpha(alpha);
    return color.toRgbString();
  } else {
    return colorString;
  }
}

// Copied from graph.ts
function timeFormat(ticks: number, min: number, max: number): string {
  if (min && max && ticks) {
    const range = max - min;
    const secPerTick = range / ticks / 1000;
    const oneDay = 86400000;
    const oneYear = 31536000000;

    if (secPerTick <= 45) {
      return '%H:%M:%S';
    }
    if (secPerTick <= 7200 || range <= oneDay) {
      return '%H:%M';
    }
    if (secPerTick <= 80000) {
      return '%m/%d %H:%M';
    }
    if (secPerTick <= 2419200 || range <= oneYear) {
      return '%m/%d';
    }
    return '%Y-%m';
  }

  return '%H:%M';
}

export default Graph2;
