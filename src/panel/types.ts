import { LegendOptions, GraphTooltipOptions } from '@grafana/ui';
import { GraphLegendEditorLegendOptions } from './GraphLegendEditor';
import { YAxis, ReducerID, FieldDisplayOptions, ThresholdsMode, DataSourceSelectItem } from '@grafana/data';

export const standardFieldDisplayOptions: FieldDisplayOptions = {
  values: false,
  calcs: [ReducerID.mean],
  defaults: {
    thresholds: {
      mode: ThresholdsMode.Absolute,
      steps: [
        { value: -Infinity, color: 'green' },
        { value: 80, color: 'red' }, // 80%
      ],
    },
    mappings: [],
  },
  overrides: [],
};

export interface SeriesOptions {
  color?: string;
  yAxis?: YAxis;
  [key: string]: any;
}
export interface GraphOptions {
  showBars: boolean;
  showLines: boolean;
  showPoints: boolean;
  isStacked: boolean;
  lineWidth: number;
  fill: number;
  fillGradient: number;
}

export interface GraphDatasourceOptions {
  datasource?: string;
  input_bucket?: string;
  output_bucket?: string;
}

export interface Options {
  graph: GraphOptions;
  legend: LegendOptions & GraphLegendEditorLegendOptions;
  series: {
    [alias: string]: SeriesOptions;
  };
  fieldOptions: FieldDisplayOptions;
  tooltipOptions: GraphTooltipOptions;
  datasourceOptions: GraphDatasourceOptions;
  modelName?: string;
}

export const defaults: Options = {
  graph: {
    showBars: false,
    showLines: true,
    showPoints: false,
    isStacked: false,
    lineWidth: 1,
    fill: 1,
    fillGradient: 0,
  },
  legend: {
    asTable: false,
    isVisible: true,
    placement: 'under',
  },
  series: {},
  fieldOptions: { ...standardFieldDisplayOptions },
  tooltipOptions: { mode: 'single' },
  datasourceOptions: {
    datasource: '',
    input_bucket: '',
    output_bucket: 'loudml',
  },
  modelName: '',
};
