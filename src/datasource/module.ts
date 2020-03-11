import { DataSourcePlugin } from '@grafana/data';

import { LoudMLDatasource } from './datasource';
import { LoudMLQueryCtrl as QueryCtrl } from './query_ctrl';
import { LoudMLConfigCtrl as ConfigCtrl } from './config_ctrl';
import { LoudMLQuery, LoudMLOptions } from './types';

const pluginExports = {
  ConfigCtrl,
  QueryCtrl
};

// export {
//   LoudMLDatasource as Datasource,
//   LoudMLConfigCtrl as ConfigCtrl,
//   LoudMLQueryCtrl as QueryCtrl
// };

const plugin = new DataSourcePlugin<LoudMLDatasource, LoudMLQuery, LoudMLOptions>(LoudMLDatasource);
plugin.setComponentsFromLegacyExports(pluginExports);

export { plugin };

// export {
//   LoudMLDatasource as Datasource,
//   LoudMLConfigCtrl as ConfigCtrl,
//   LoudMLQueryCtrl as QueryCtrl
// };





// import './query_parameter_ctrl';
// import { DataSourcePlugin } from '@grafana/data';
// import { ConfigEditor } from './components/ConfigEditor';
// import { QueryEditor } from './components/QueryEditor';
// import CloudWatchDatasource from './datasource';
// import { CloudWatchAnnotationsQueryCtrl } from './annotations_query_ctrl';
// import { CloudWatchJsonData, CloudWatchQuery } from './types';

// export const plugin = new DataSourcePlugin<CloudWatchDatasource, CloudWatchQuery, CloudWatchJsonData>(
//   CloudWatchDatasource
// )
//   .setConfigEditor(ConfigEditor)
//   .setQueryEditor(QueryEditor)
//   .setExploreQueryField(QueryEditor)
//   .setAnnotationQueryCtrl(CloudWatchAnnotationsQueryCtrl);
