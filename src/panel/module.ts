import { FieldConfigProperty, PanelPlugin } from '@grafana/data';
import { getDataSourceSrv } from '@grafana/runtime';

import { GraphPanelEditor } from './GraphPanelEditor';
import { GraphPanel } from './GraphPanel';
import { Options, defaults } from './types';

export const plugin = new PanelPlugin<Options>(GraphPanel).setDefaults(defaults).setEditor(GraphPanelEditor);

// function datasourcesList() {
//   var res = new Array({ label: 'Not selected', value: '' });
//   var datasources = getDataSourceSrv().getMetricSources();

//   datasources.forEach(function (val) {
//     if (val.meta.id === "loudml-datasource") {
//       res.push({label: val.name, value: val.value});
//     }
//   });

//   return res;
// }

// export const plugin = new PanelPlugin<Options>(GraphPanel)
//   .useFieldConfig({ standardOptions: [FieldConfigProperty.Unit, FieldConfigProperty.Decimals] })
//   .setPanelOptions(builder => {
//     builder
//       .addSelect({
//         path: 'datasourceOptions.datasource',
//         name: 'Loud ML Server',
//         description: ''
//         settings: {
//           options: datasourcesList()
//         },
//         defaultValue: '',
//       })
//       .addTextInput({
//         path: 'datasourceOptions.input_bucket',
//         name: 'Input Bucket',
//         description: 'Datasource/Database used in Query'
//         defaultValue: '',
//       })
//       .addTextInput({
//         path: 'datasourceOptions.output_bucket',
//         name: 'Output Bucket',
//         description: 'Database to store ML Model training results'
//         defaultValue: 'loudml',
//       })
//       .addBooleanSwitch({
//         path: 'graph.showBars',
//         name: 'Bars',
//         description: '',
//         defaultValue: false,
//       })
//       .addBooleanSwitch({
//         path: 'graph.showLines',
//         name: 'Lines',
//         description: '',
//         defaultValue: true,
//       })
//       .addSelect({
//         path: 'graph.lineWidth',
//         name: 'Line Width',
//         description: ''
//         settings: {
//           options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(t=>({value: t, label: t}))
//         },
//         defaultValue: 1,
//       })
//       .addSelect({
//         path: 'graph.fill',
//         name: 'Area fill',
//         description: ''
//         settings: {
//           options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(t=>({value: t, label: t}))
//         },
//         defaultValue: 1,
//       })
//       .addSelect({
//         path: 'graph.fillGradient',
//         name: 'Fill Gradient',
//         description: ''
//         settings: {
//           options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(t=>({value: t, label: t}))
//         },
//         defaultValue: 0,
//       })
//       .addBooleanSwitch({
//         path: 'graph.showPoints',
//         name: 'Poins',
//         description: '',
//         defaultValue: false,
//       })
//       .addBooleanSwitch({
//         path: 'graph.isStacked',
//         name: 'Stack',
//         description: '',
//         defaultValue: false,
//       })
//       .addBooleanSwitch({
//         path: 'legend.isVisible',
//         name: 'Show legend',
//         description: '',
//         defaultValue: true,
//       })
//       .addBooleanSwitch({
//         path: 'legend.asTable',
//         name: 'Display legend as table',
//         description: '',
//         defaultValue: false,
//       })
//       .addRadio({
//         path: 'legend.placement',
//         name: 'Legend placement',
//         description: '',
//         defaultValue: 'under',
//         settings: {
//           options: [
//             { value: 'under', label: 'Below graph' },
//             { value: 'right', label: 'Right to the graph' },
//           ],
//         },
//       })
//       .addRadio({
//         path: 'tooltipOptions.mode',
//         name: 'Tooltip mode',
//         description: '',
//         defaultValue: 'single',
//         settings: {
//           options: [
//             { value: 'single', label: 'Single series' },
//             { value: 'multi', label: 'All series' },
//           ],
//         },
//       });
//   });
