import { DataSourcePlugin } from '@grafana/data';

import { LoudMLDatasource } from './datasource';
import { LoudMLQueryCtrl as QueryCtrl } from './query_ctrl';
import { LoudMLConfigCtrl as ConfigCtrl } from './config_ctrl';
import { LoudMLQuery, LoudMLOptions } from './types';


export {
  LoudMLDatasource as Datasource,
  ConfigCtrl,
  QueryCtrl
};


// const pluginExports = {
//   ConfigCtrl,
//   QueryCtrl
// };

// const plugin = new DataSourcePlugin<LoudMLDatasource, LoudMLQuery, LoudMLOptions>(LoudMLDatasource);
// plugin.setComponentsFromLegacyExports(pluginExports);

// export { plugin };
