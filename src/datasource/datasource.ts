import { BackendSrv } from 'grafana/app/core/services/backend_srv';

import LoudMLAPI from './loudml_api';

export default class LoudMLDatasource {
  loudml: LoudMLAPI;
  bucket: string;
  jsonData: any;

  /** @ngInject */
  constructor(instanceSettings: any, backendSrv: BackendSrv) {
    this.bucket = (instanceSettings.jsonData || {}).bucket;
    this.loudml = new LoudMLAPI(instanceSettings, backendSrv);
  }

  async query(options: any) {
    const { url, params } = options;
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

export { LoudMLDatasource };
