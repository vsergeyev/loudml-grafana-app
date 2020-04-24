import React from 'react';
import moment from 'moment'

import { GraphSeriesToggler, Button, Tooltip } from '@grafana/ui';
import { PanelData, GraphSeriesXY, AbsoluteTimeRange, TimeZone, AppEvents } from '@grafana/data';
import { getDataSourceSrv, getBackendSrv } from '@grafana/runtime';
import appEvents from 'grafana/app/core/app_events';

import { getGraphSeriesModel } from './getGraphSeriesModel';
import { Options, SeriesOptions } from './types';
import { SeriesColorChangeHandler, SeriesAxisToggleHandler } from '@grafana/ui/src/components/Graph/GraphWithLegend';

import LoudMLDatasource from '../datasource/datasource';
import {
  DEFAULT_LOUDML_RP,
  MODEL_TYPE_LIST,
  DEFAULT_MODEL,
  DEFAULT_FEATURE,
  DEFAULT_START_OPTIONS,
  MIN_INTERVAL_SECOND,
  MIN_INTERVAL_UNIT,
  MAX_INTERVAL_SECOND,
  MAX_INTERVAL_UNIT,
  MIN_SPAN,
  MAX_SPAN,
  DEFAULT_ANOMALY_TYPE,
  ANOMALY_HOOK_NAME,
  ANOMALY_HOOK
} from '../datasource/types';

import {
  extract_tooltip_feature,
  extract_group_by,
  extract_fill_value,
  extract_format_tags,
  extract_is_valid,
  extract_model_database,
  extract_model_measurement,
  extract_model_select,
  extract_model_feature,
  extract_model_func,
  extract_model_fill,
  extract_model_time_format,
  extract_model_time,
  extract_model_tags,
  extract_model_tags_map
} from './extractors';


interface GraphPanelControllerAPI {
  series: GraphSeriesXY[];
  onSeriesAxisToggle: SeriesAxisToggleHandler;
  onSeriesColorChange: SeriesColorChangeHandler;
  onSeriesToggle: (label: string, event: React.MouseEvent<HTMLElement>) => void;
  onToggleSort: (sortBy: string) => void;
  onHorizontalRegionSelected: (from: number, to: number) => void;
}

interface GraphPanelControllerProps {
  children: (api: GraphPanelControllerAPI) => JSX.Element;
  options: Options;
  data: PanelData;
  timeZone: TimeZone;
  onOptionsChange: (options: Options) => void;
  onChangeTimeRange: (timeRange: AbsoluteTimeRange) => void;
}

interface GraphPanelControllerState {
  graphSeriesModel: GraphSeriesXY[];
}

export class GraphPanelController extends React.Component<GraphPanelControllerProps, GraphPanelControllerState> {
  constructor(props: GraphPanelControllerProps) {
    super(props);

    this.onSeriesColorChange = this.onSeriesColorChange.bind(this);
    this.onSeriesAxisToggle = this.onSeriesAxisToggle.bind(this);
    this.onToggleSort = this.onToggleSort.bind(this);
    this.onHorizontalRegionSelected = this.onHorizontalRegionSelected.bind(this);

    this.state = {
      graphSeriesModel: getGraphSeriesModel(
        props.data.series,
        props.timeZone,
        props.options.series,
        props.options.graph,
        props.options.legend,
        props.options.fieldOptions
      )
    };
  }

  static getDerivedStateFromProps(props: GraphPanelControllerProps, state: GraphPanelControllerState) {
    return {
      ...state,
      graphSeriesModel: getGraphSeriesModel(
        props.data.series,
        props.timeZone,
        props.options.series,
        props.options.graph,
        props.options.legend,
        props.options.fieldOptions
      ),
    };
  }

  onSeriesOptionsUpdate(label: string, optionsUpdate: SeriesOptions) {
    const { onOptionsChange, options } = this.props;
    const updatedSeriesOptions: { [label: string]: SeriesOptions } = { ...options.series };
    updatedSeriesOptions[label] = optionsUpdate;
    onOptionsChange({
      ...options,
      series: updatedSeriesOptions,
    });
  }

  onSeriesAxisToggle(label: string, yAxis: number) {
    const {
      options: { series },
    } = this.props;
    const seriesOptionsUpdate: SeriesOptions = series[label]
      ? {
          ...series[label],
          yAxis: {
            ...series[label].yAxis,
            index: yAxis,
          },
        }
      : {
          yAxis: {
            index: yAxis,
          },
        };
    this.onSeriesOptionsUpdate(label, seriesOptionsUpdate);
  }

  onSeriesColorChange(label: string, color: string) {
    const {
      options: { series },
    } = this.props;
    const seriesOptionsUpdate: SeriesOptions = series[label]
      ? {
          ...series[label],
          color,
        }
      : {
          color,
        };

    this.onSeriesOptionsUpdate(label, seriesOptionsUpdate);
  }

  onToggleSort(sortBy: string) {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      legend: {
        ...options.legend,
        sortBy,
        sortDesc: sortBy === options.legend.sortBy ? !options.legend.sortDesc : false,
      },
    });
  }

  onHorizontalRegionSelected(from: number, to: number) {
    const { onChangeTimeRange } = this.props;
    onChangeTimeRange({ from, to });
  }

  render() {
    const { children } = this.props;
    const { graphSeriesModel } = this.state;
    let panelChrome = null;
    try {
      panelChrome = this._reactInternalFiber._debugOwner._debugOwner._debugOwner.stateNode;
    } catch(e){
      window.console.log(e);
    }

    return (
      <GraphSeriesToggler series={graphSeriesModel}>
        {({ onSeriesToggle, toggledSeries }) => {
          return children({
            series: toggledSeries,
            onSeriesColorChange: this.onSeriesColorChange,
            onSeriesAxisToggle: this.onSeriesAxisToggle,
            onToggleSort: this.onToggleSort,
            onSeriesToggle: onSeriesToggle,
            onHorizontalRegionSelected: this.onHorizontalRegionSelected,
            panelChrome: panelChrome,
          });
        }}
      </GraphSeriesToggler>
    );
  }
}

export class LoudMLTooltip extends React.Component {
  data: any;

  constructor(props: any) {
    super(props);
    this.data = props.data;
  }

  render () {
    const feature = (
      (
        this.data.request.targets
        &&this.data.request.targets.length>0
        &&extract_tooltip_feature(this.data.request.targets[0])
      )
    )|| 'Select one field'

    const interval = (
      (
        this.data.request.targets
        &&this.data.request.targets.length>0
        &&extract_group_by(this.data.request.targets[0])
      )
    )|| 'Select a \'Group by\' value'

    const fill_value = (
        this.data.request.targets
        &&this.data.request.targets.length>0
        &&extract_fill_value(this.data.request.targets[0])
    )|| 'Select a \'Fill\' value'

    // TODO: extractor for Tags
    const tags_value = (
        this.data.request.targets
        &&extract_format_tags(this.data.request.targets[0])
    )|| '(Optional) Select \'Tag(s)\' or WHERE statement'

    return (
      <div className='small'>
        <p>Use your current data selection to baseline normal metric behavior using a machine learning task.
          <br />
          This will create a new model, and run training to fit the baseline to your data.
          <br />
          You can visualise the baseline, and forecast future data once training is completed.
          To run model click on <i className="fa fa-play"></i> Play button.
          <br />
          <br />
          Use Mixed Query, leave first query with source data as is.
          Then add a query from datasource equal to Loud ML output bucket (ex. "loudml").
          In output database will be present metrics "lower_mean_*", "upper_mean_" and "@mean_".
          To filter results by your model please use WHERE clause and select your model name.
        </p>
        <p>
          <b>Feature:</b>
          <br />
          <code>{feature}</code>
        </p>
        <p>
          <b>groupBy bucket interval:</b>
          <br />
          <code>{interval}</code>
        </p>
        <p>
          <b>Match all:</b>
          <br />
          <code>{tags_value}</code>
        </p>
        <p>
          <b>Fill value:</b>
          <br />
          <code>{fill_value}</code>
        </p>
      </div>
    )
  }
}

export class CreateBaselineButton extends React.Component {
  data: any;
  dsName: string;
  ds: LoudMLDatasource;
  datasource: any;

  constructor(props: any) {
    super(props);
    this.data = props.data;
    this.ds = null;
    this.dsName = null;
    window.console.log('CreateBaselineButton init', props);
  }

  componentDidUpdate(prevProps) {
    this.data = this.props.data;
    // window.console.log('BaselineButton update', this.data);
  }

  isValid() {
    return (
      this.data.request.targets
      &&this.data.request.targets.length>0
      &&extract_is_valid(this.data.request.targets[0])
    )
  }

  normalizeInterval(bucketInterval: any) {
    // interval = max(5, min(bucketIntervak, 60))
    const regex = /(\d+)(.*)/
    const interval = regex.exec(bucketInterval)
    if (!interval) {
        return MIN_INTERVAL_UNIT
    }

    const duration = moment.duration(parseInt(interval[1], 10), interval[2]).asSeconds()
    if (!duration) {
        return MIN_INTERVAL_UNIT
    }

    const normalized = Math.max(
        MIN_INTERVAL_SECOND,
        Math.min(
            duration,
            MAX_INTERVAL_SECOND
        )
    )
    return `${normalized}s`
  }

  normalizeSpan(bucketInterval: any) {
    // span = max(10, min(24h/bucketInterval, 100))
    const regex = /(\d+)(.*)/
    const interval = regex.exec(bucketInterval)
    if (!interval) {
        return MIN_SPAN
    }

    const duration = moment.duration(parseInt(interval[1], 10), interval[2]).asSeconds()
    if (!duration) {
        return MIN_SPAN
    }

    return Math.max(MIN_SPAN, Math.min(Math.ceil(86400/duration), MAX_SPAN))
  }

  _trainModel(name: string) {
    const loudml = this.ds.loudml;

    try {
      loudml.trainModel(name, this.data).then(result => {
        window.console.log("trainModel", result)
        appEvents.emit(AppEvents.alertSuccess, ['Model train job started on Loud ML server']);
      }).catch(err => {
        window.console.log("trainModel error", err)
        appEvents.emit(AppEvents.alertError, ['Model train job error', err.data.message]);
        return
      });
    } catch (error) {
      console.error(error)
      appEvents.emit(AppEvents.alertError, ['Model train job error', err.message]);
    }

  }

  _createAndTrainModel() {
    // Model Example:
    // {
    //     "bucket_interval": "5m",
    //     "default_bucket": "telegraf_autogen_cpu",
    //     "features": [
    //         {
    //             "name": "mean_usage_user",
    //             "measurement": "cpu",
    //             "field": "usage_user",
    //             "metric": "mean",
    //             "io": "io",
    //             "default": null,
    //             "match_all": [
    //                 {
    //                     "tag": "cpu",
    //                     "value": "cpu-total"
    //                 },
    //                 {
    //                     "tag": "host",
    //                     "value": "macbook4823"
    //                 }
    //             ]
    //         }
    //     ],
    //     "interval": "60s",
    //     "max_evals": 10,
    //     "name": "telegraf_cpu_mean_usage_user_cpu_cpu_total_host_macbook4823_5m",
    //     "offset": "10s",
    //     "span": 100,
    //     "type": "donut"
    // }

    const source = this.data.request.targets[0];
    const fields = [source];
    const loudml = this.ds.loudml;

    this.getDatasource(source.datasource).then(result => {
      this.datasource = result;
      window.console.log("getDatasource", this.datasource);

      // TODO: find a way to pass all this.datasource connection params to Loud ML server
      // This will allow to auto create bucket to store ML Model training results

      // this.ds.loudml.createAndGetBucket(
      //   this.datasource.database,
      //   source.policy,
      //   source.measurement,
      //   this.datasource
      // ).then(result => {
      //     const bucket = result;
          const bucket = this.props.panelOptions.datasourceOptions.input_bucket;
          window.console.log("Input Bucket", bucket);

          const name = [
              extract_model_database(this.datasource),
              extract_model_measurement(source),
              extract_model_select(source),
              extract_model_tags(source),
              extract_model_time_format(source),
          ].join('_').replace(/\./g, "_")

          // window.console.log("New ML Model name", name)

          // Group By Value – [{params: ["5m"], type: "time"}, {params: ["linear"], type: "fill"}]
          // Let parse a "5m" time from it
          const time = extract_model_time(source);
          const model = {
              ...DEFAULT_MODEL,
              max_evals: 10,
              name: name,
              interval: this.normalizeInterval(time),
              span: this.normalizeSpan(time),
              default_bucket: bucket, //bucket.name - if we will use createAndGetBucket()
              bucket_interval: time,
              features: fields.map(
                  (field) => ({
                          name: extract_model_select(field),
                          measurement: extract_model_measurement(field),
                          field: extract_model_feature(field),
                          metric: extract_model_func(field), // aggregator, avg/mean
                          io: 'io',
                          default: extract_model_fill(source),
                          match_all: extract_model_tags_map(field), // .tags && field.tags.map(
                              // (tag) => ({
                              //         tag: tag.key,
                              //         value: tag.value,
                              //     })
                              // )) || [],
                      })
                  ),
          }

          window.console.log("ML Model", model)
          this.props.panelOptions.modelName = name;
          this.props.onOptionsChange(this.props.panelOptions);

          loudml.getModel(name).then(result => {
            // Model already exists
            // Let re-Train it on current dataframe
            // window.console.log("getModel", result);
            this.props.panelOptions.modelName = name;
            this.props.onOptionsChange(this.props.panelOptions);
            this._trainModel(name);

          }).catch(err => {
            // New Model
            // Create, train
            loudml.createModel(model).then(result => {
              // window.console.log("createModel", result);
              loudml.createModelHook(model.name, loudml.createHook(ANOMALY_HOOK, model.default_bucket)).then(result => {
                // window.console.log("createModelHook", result);
                // loudml.modelCreated(model)
                appEvents.emit(AppEvents.alertSuccess, ['Model has been created on Loud ML server']);

                this.props.panelOptions.modelName = name;
                this.props.onOptionsChange(this.props.panelOptions);
                this._trainModel(name);

              }).catch(err => {
                window.console.log("createModelHook error", err);
                appEvents.emit(AppEvents.alertError, [err.message]);
                return
              });
            }).catch(err => {
              window.console.log("createModel error", err);
              appEvents.emit(AppEvents.alertError, ["Model create error", err.data]);
              return
            });
          });
        // })

    }).catch(err => {
      console.error(err);
      appEvents.emit(AppEvents.alertError, [err.message]);
      return
    });
  }

  async getDatasource(value: any) {
    // TODO: Consider to use this to get proper URL, username
    // getBackendSrv().get('api/datasources/' + 6)
    // .then(ds => {
    //   window.console.log(ds)
    // })

    return (await getDataSourceSrv().loadDatasource(value));
  }

  async getLoudMLDatasource() {
    return (await getDataSourceSrv().loadDatasource(this.dsName)) as LoudMLDatasource;
  }

  onCreateBaselineClick() {
    // window.console.log(this);

    this.dsName = this.props.panelOptions.datasourceOptions.datasource;

    if (!this.dsName) {
      appEvents.emit(AppEvents.alertError, ['Please choose Loud ML Server in panel settings']);
      return
    }

    this.getLoudMLDatasource().then(result => {
        this.ds = result;

        if (this.isValid()) {
          this._createAndTrainModel();
        } else {
          appEvents.emit(AppEvents.alertError, ['In Query settings please choose One metric; Group by != auto; Fill != linear']);
        }

    }).catch(err => {
      window.console.log("Error getting Loud ML datasource", err);
      appEvents.emit(AppEvents.alertError, [err.message]);
      return
    });
  }

  render () {
    const data = this.data;

    return(
      <>
      <Button size="sm" className="btn btn-inverse" disabled={!this.isValid()}
        onClick={this.onCreateBaselineClick.bind(this)}>
        <i className="fa fa-graduation-cap fa-fw"></i>
        Create Baseline
      </Button>
      <Tooltip placement="top" content={<LoudMLTooltip data={data} />}>
        <span className="gf-form-help-icon">
          <i className="fa fa-info-circle" />
        </span>
      </Tooltip>
      </>
    )
  }
}

export class MLModelController extends React.Component {
  is_trained: boolean;
  is_running: boolean;
  model: any;
  modelName: string;
  dsName: string;
  loudml: any;

  constructor(props: any) {
    super(props);
    // window.console.log('MLModelController init', props);
    this.getLoudMLDatasource();
  }

  componentDidUpdate(prevProps) {
    // window.console.log('MLModelController update', this.props);
    this.getLoudMLDatasource();
  }

  componentDidMount() {
    this.intervalId = setInterval(this.getModel.bind(this), 15000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getModel() {
    if (!this.loudml || this.props.panelOptions.modelName.length==0) {
      return
    }

    this.modelName = this.props.panelOptions.modelName;
    // window.console.log("ML getModel", this.modelName);

    this.loudml.getModel(this.modelName).then(result => {
      this.model = result[0];
      this.props.onOptionsChange(this.props.panelOptions);
    }).catch(err => {
      window.console.log("Error getting Loud ML model", err);
    });
  }

  getLoudMLDatasource() {
    if (this.dsName == this.props.panelOptions.datasourceOptions.datasource) {
      return
    }

    this.dsName = this.props.panelOptions.datasourceOptions.datasource;

    if (!this.dsName) {
      return
    }

    getDataSourceSrv().loadDatasource(this.dsName).then(result => {
      this.ds = result;
      this.loudml = this.ds.loudml;
      this.getModel();
    }).catch(err => {
      window.console.log("Error getting Loud ML datasource", err);
      return
    });
  }

  toggleModelRun() {
    if (this.model && this.model.settings && this.model.settings.run) {
      this.loudml.stopModel(this.modelName).then(result => {
        this.model.settings.run = false;
        this.props.onOptionsChange(this.props.panelOptions);
      });
    } else {
      this.loudml.startModel(this.modelName).then(result => {
        this.model.settings.run = true;
        this.props.onOptionsChange(this.props.panelOptions);
      });
    }
  }

  trainModel() {
    if (this.model) {
      try {
        this.loudml.trainModel(this.modelName, this.props.data).then(result => {
          window.console.log("ML trainModel", result)
          appEvents.emit(AppEvents.alertSuccess, ['Model train job started on Loud ML server']);
        }).catch(err => {
          window.console.log("ML trainModel error", err)
          appEvents.emit(AppEvents.alertError, ['Model train job error', err.data.message]);
          return
        });
      } catch (error) {
        console.error(error)
        appEvents.emit(AppEvents.alertError, ['Model train job error', err.message]);
      }
    }
  }

  forecastModel() {
    if (this.model) {
      try {
        this.loudml.forecastModel(this.modelName, this.props.data).then(result => {
          window.console.log("ML forecastModel", result)
          appEvents.emit(AppEvents.alertSuccess, ['Model forecast job started on Loud ML server']);
        }).catch(err => {
          window.console.log("ML forecastModel error", err)
          appEvents.emit(AppEvents.alertError, ['Model forecast job error', err.data.message]);
          return
        });
      } catch (error) {
        console.error(error)
        appEvents.emit(AppEvents.alertError, ['Model forecast job error', err.message]);
      }
    }
  }

  render () {
    const play_btn = (
      this.model
      && this.model.settings
      && this.model.settings.run
      && <a href="#" onClick={this.toggleModelRun.bind(this)}> <i className="fa fa-pause"></i> Stop</a>
    ) || <a href="#" onClick={this.toggleModelRun.bind(this)}> <i className="fa fa-play"></i> Play</a>;

    let model_trained = (
      this.model
      && this.model.state
      && this.model.state.trained
      && "Trained."
    ) || "Not trained.";

    if (this.model && this.model.training && (this.model.training.state == "running")) {
      model_trained = "Training...";
    }

    if (this.modelName) {
      return(
        <span className="panel-time-info">
          ML Model: {this.modelName} <span className="label">{model_trained}</span>
          {play_btn}
          <a href="#" onClick={this.trainModel.bind(this)}> <i className="fa fa-clock-o"></i> Train</a>
          <a href="#" onClick={this.forecastModel.bind(this)}> <i className="fa fa-clock-o"></i> Forecast</a>

          <Tooltip placement="top" content="Current time range selection will be used to Train / Forecast">
            <span className="gf-form-help-icon">
              <i className="fa fa-info-circle" />
            </span>
          </Tooltip>
        </span>
      )
    } else {
      return null
    }
  }
}
