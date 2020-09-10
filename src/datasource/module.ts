import { DataSourcePlugin } from '@grafana/data';

import { LoudMLDatasource } from './datasource';
// import { LoudMLQueryCtrl as QueryCtrl } from './query_ctrl';
// import { LoudMLConfigCtrl as ConfigCtrl } from './config_ctrl';
import { LoudMLQueryCtrl } from './query_ctrl';
import { LoudMLConfigCtrl } from './config_ctrl';
import { LoudMLQuery, LoudMLOptions } from './types';

// export { LoudMLDatasource as Datasource, ConfigCtrl, QueryCtrl };

export { LoudMLDatasource, LoudMLDatasource as Datasource, LoudMLQueryCtrl as QueryCtrl, LoudMLConfigCtrl as ConfigCtrl };
