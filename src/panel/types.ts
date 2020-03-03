import { LegendOptions, GraphTooltipOptions } from '@grafana/ui';
import { GraphLegendEditorLegendOptions } from './GraphLegendEditor';
import { YAxis, ReducerID, FieldDisplayOptions, ThresholdsMode } from '@grafana/data';

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
}

export interface Options {
  graph: GraphOptions;
  legend: LegendOptions & GraphLegendEditorLegendOptions;
  series: {
    [alias: string]: SeriesOptions;
  };
  fieldOptions: FieldDisplayOptions;
  tooltipOptions: GraphTooltipOptions;
}

export const defaults: Options = {
  graph: {
    showBars: false,
    showLines: true,
    showPoints: false,
  },
  legend: {
    asTable: false,
    isVisible: true,
    placement: 'under',
  },
  series: {},
  fieldOptions: { ...standardFieldDisplayOptions },
  tooltipOptions: { mode: 'single' },
};
