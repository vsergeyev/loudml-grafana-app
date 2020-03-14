import { getDataSourceSrv } from '@grafana/runtime';
// import { getDatasourceSrv } from 'app/features/plugins/datasource_srv';

import LoudMLAPI from './loudml_api';
import configTemplate from './partials/config.html';
import LoudMLDatasource from './datasource';


export class LoudMLConfigCtrl {
  public static template = configTemplate;
  public ACCESS_OPTIONS = [
    { key: 'proxy', value: 'Server (Default)' },
    { key: 'direct', value: 'Browser' }
  ];

  current: any;

  public showAccessHelp = false;
  public modelsList = [];
  public jobsList = [];

  constructor(private $scope: any) {
    // window.console.log($scope);

    if(this.$scope.current === undefined) {
      this.$scope.current = {
        url: '',
        access: 'proxy',
      };
    }
  }

  toggleAccessHelp() {
    this.showAccessHelp = !this.showAccessHelp;
  }

  async refreshModels() {
    window.console.log("REFRESH MODELS!");
    // window.console.log(this);
    // window.console.log(this.$scope);

    // this.$scope.$apply();

    this.$scope.ctrl.modelsList = [{'settings': {'name': 'Loading...'}, 'state': {'trained': ''}}];

    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;
    // window.console.log(ds);

    try {
      ds.query({'url': '/models'}).then(
        (response) => {
          // window.console.log(this);
          this.$scope.ctrl.modelsList = response;
          //window.console.log(this.$scope.ctrl.modelsList);
          this.$scope.$apply();
        }
      );

      ds.query({'url': '/jobs'}).then(
        (response) => {
          // window.console.log(this);
          this.$scope.ctrl.jobsList = response;
          this.$scope.$apply();
        }
      );
    } catch(err) {
      console.error(err);
    }

    //window.console.log(this.$scope.ctrl.modelsList);
  }

  addModel() {
    window.console.log("ADD MODEL");
  }

  editModel(name: any) {
    window.console.log("EDIT MODEL");
  }

  deleteModel(name: any) {
    window.console.log("DELETE MODEL");
  }
}
