import { DataSourceApi, DataSourceInstanceSettings } from '@grafana/data';
import { DataQuery, DataSourceJsonData } from '@grafana/data';

import { BackendSrv } from 'grafana/app/core/services/backend_srv';

import LoudMLAPI from './loudml_api';
import { LoudMLQuery, LoudMLOptions } from './types';

export class LoudMLDatasource extends DataSourceApi<LoudMLQuery, LoudMLOptions> {
  private loudml: LoudMLAPI;

  type: string;
  name: string;
  bucket: string;

  /** @ngInject */
  constructor(instanceSettings: DataSourceInstanceSettings<LoudMLOptions>, backendSrv: BackendSrv) {
    super(instanceSettings);

    this.type = 'loudml-datasource';
    this.name = instanceSettings.name;

    // window.console.log(instanceSettings);

    this.bucket = instanceSettings.database;
    this.loudml = new LoudMLAPI(instanceSettings, backendSrv);
  }

  async query(options: any) {
    const { url, params? } = options;
    const response = await this.loudml.get(url, params);
    return response;
  }

  async testDatasource() {
    const response = await this.loudml.get('/');
    return response.version
      ? { status: 'success', message: 'Data source is working, Loud ML server version ' + response.version }
      : { status: 'error', message: response.error };
  }

  // metricFindQuery(query: string, options?: any) {
  //   return [];
  // }
}
