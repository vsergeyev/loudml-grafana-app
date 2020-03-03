import LoudMLAPI from './loudml_api';

import { BackendSrv } from 'grafana/app/core/services/backend_srv';

export class LoudMLDatasource {
  private loudml: LoudMLAPI;

  /** @ngInject */
  constructor(instanceSettings: any, backendSrv: BackendSrv) {
    this.loudml = new LoudMLAPI(instanceSettings, backendSrv);
  }

  async query(options: any) {
    console.log(options);
  }

  async testDatasource() {
    try {
      await this.loudml.get('/');
      return {
        status: 'success', title: 'Success',
        message: 'Datasource is working'
      };
    } catch(err) {
      console.error(err);
      return {
        status: 'error', title: 'Error',
        message: err.message
      };
    }
  }

  metricFindQuery(options: any) {
    return [];
  }
}
