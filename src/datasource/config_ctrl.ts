import { getDataSourceSrv } from '@grafana/runtime';
import { AppEvents } from '@grafana/data';
import { CoreEvents } from 'grafana/app/types';
import appEvents from 'grafana/app/core/app_events';

import LoudMLAPI from './loudml_api';
import configTemplate from './partials/config.html';
import LoudMLDatasource from './datasource';
import { DEFAULT_MODEL } from './types';


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

    this.$scope.ctrl.modelsList = [{'is_loading': true, 'settings': {'name': 'Loading...'}, 'state': {'trained': ''}}];

    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.query({'url': '/models'}).then(
        (response) => {
          this.$scope.ctrl.modelsList = response;
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
  }

  addModel() {
    window.console.log("ADD MODEL");
    const model = DEFAULT_MODEL;
    appEvents.emit('show-modal', {
      src: '/public/plugins/grafana-loudml-app/datasource/partials/add_model.html',
      modalClass: 'confirm-modal',
      model: model
    });
  }

  editModel(name: any) {
    window.console.log("EDIT MODEL");
    window.console.log(name);
    const model = this.$scope.ctrl.modelsList.find(el => el.settings.name == name);
    window.console.log(model);

    // appEvents.emit(CoreEvents.showModal, {
    appEvents.emit('show-modal', {
      src: '/public/plugins/grafana-loudml-app/datasource/partials/edit_model.html',
      modalClass: 'confirm-modal',
      model: model
    });
  }

  async startModel(name: any) {
    window.console.log("START MODEL");
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.startModel(name).then(
        (response) => {
          window.console.log(response);
          appEvents.emit(AppEvents.alertSuccess, ['Model has been started on Loud ML server']);
          this.refreshModels();
        }
      );
    } catch(err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model start error', err]);
    }
  }

  async stopModel(name: any) {
    window.console.log("STOP MODEL");
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.stopModel(name).then(
        (response) => {
          window.console.log(response);
          appEvents.emit(AppEvents.alertSuccess, ['Model has been stoped on Loud ML server']);
          this.refreshModels();
        }
      );
    } catch(err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model stop error', err]);
    }
  }

  async forecastModel(name: any) {
    window.console.log("FORECAST MODEL");
  }

  async trainModel(name: any) {
    window.console.log("TRAIN MODEL");
  }

  async deleteModel(name: any) {
    window.console.log("DELETE MODEL");
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.deleteModel(name).then(
        (response) => {
          window.console.log(response);
          appEvents.emit(AppEvents.alertSuccess, ['Model has been deleted on Loud ML server']);
          this.refreshModels();
        }
      );
    } catch(err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model delete error', err]);
    }
  }
}
