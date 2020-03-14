import { BackendSrv } from 'grafana/app/core/services/backend_srv';

import LoudMLAPI from './loudml_api';


export class LoudMLDatasource {
  private loudml: LoudMLAPI;

  jsonData: any;

  /** @ngInject */
  constructor(instanceSettings: any, backendSrv: BackendSrv) {
    // window.console.log("instanceSettings", instanceSettings);

    this.bucket = (instanceSettings.jsonData || {}).bucket;
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

  metricFindQuery(options: any) {
    return [];
  }
}
