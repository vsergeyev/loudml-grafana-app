// Libraries
import $ from 'jquery';
import React, { PureComponent } from 'react';
import uniqBy from 'lodash/uniqBy';

import { Graph } from '@grafana/ui';
import { getBackendSrv } from '@grafana/runtime';
import {
  getValueFormat,
  formattedValueToString,
} from '@grafana/data';

import { getDashboardSrv } from 'grafana/app/features/dashboard/services/DashboardSrv';


export class Graph2 extends Graph {
  dashboard: any;
  eventManager: EventManager;

  constructor(props) {
    super(props)
    // window.console.log(props);
    // const em = EventManager;
    // this.dashboard = getDashboardSrv().getCurrent();
    // this.panel = dashboard.getPanelById(panelId);
    window.console.log(this);

    const params: any = {
      // type: 'annotation',
      // dashboardId: props.dashboardId,
      // from: props.timeRange.from.valueOf(),
      // to: props.timeRange.to.valueOf()
    }

    const annotations = [];
    getBackendSrv().get('/api/annotations', params).then(result => {
      window.console.log(result);
    });
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
          tickFormatter: this.tickFormatter
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

    // const dashboard = getDashboardSrv().getCurrent();
    // console.log(dashboardId);

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
}

//   render() {
//     const { height, width, series } = this.props;
//     const noDataToBeDisplayed = series.length === 0;
//     const tooltip = this.renderTooltip();
//     const context = this.renderContextMenu();
//     return (
//       <div className="graph-panel">
//         <div
//           className="graph-panel__chart"
//           ref={e => (this.element = e)}
//           style={{ height, width }}
//           onMouseLeave={() => {
//             this.setState({ isTooltipVisible: false });
//           }}
//         />
//         {noDataToBeDisplayed && <div className="datapoints-warning">No data</div>}
//         {tooltip}
//         {context}
//       </div>
//     );
//   }
// }

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
