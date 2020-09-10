import { getDataSourceSrv } from '@grafana/runtime';
import { AppEvents } from '@grafana/data';
import { CoreEvents } from 'grafana/app/types';
import appEvents from 'grafana/app/core/app_events';

import LoudMLAPI from './loudml_api';
import configTemplate from './partials/config.html';
import LoudMLDatasource from './datasource';
import { DEFAULT_MODEL, DEFAULT_JOB, DEFAULT_FEATURE, ANOMALY_HOOK_NAME, ANOMALY_HOOK } from './types';

const POST_A_BUG_SAVE_PLANET =
  'Be aware, it may be an alien bug. If so - save planet, post bug report at https://github.com/vsergeyev/loudml-grafana-app/issues (starship troopers will do the rest of bloody job for you)';

function sorry_its_error(err) {
  // Guys, it's really sorry
  window.console.log('Model update error.');
  window.console.log(POST_A_BUG_SAVE_PLANET);
  window.console.log(err);
  appEvents.emit(AppEvents.alertError, ['Model update error', err.data]);
}

export class LoudMLConfigCtrl {
  static template = configTemplate;
  ACCESS_OPTIONS = [
    { key: 'proxy', value: 'Server (Default)' },
    { key: 'direct', value: 'Browser' },
  ];

  current: any;

  showAccessHelp = false;
  modelsList = [];
  jobsList = [];
  scheduledList = [];
  buckets = [];
  job: any;
  model: any;

  constructor(private $scope: any) {
    if (this.$scope.current === undefined) {
      this.$scope.current = {
        url: '',
        access: 'proxy',
      };
    }
  }

  toggleAccessHelp() {
    this.showAccessHelp = !this.showAccessHelp;
  }

  /**
   * Displays list of ML models and jobs on server
   */
  async refreshModels() {
    this.$scope.ctrl.modelsList = [{ is_loading: true, settings: { name: 'Loading...' }, state: { trained: '' } }];

    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.query({ url: '/models', params: {} })
        .then(response => {
          this.$scope.ctrl.modelsList = response;
          this.$scope.$apply();
        })
        .catch(err => {
          console.error(err.statusText);
          console.error('Long time ago, in a galaxy far far away...');
          console.log('https://www.google.com/search?q=parallel+worlds+michio+kaku');
          appEvents.emit(AppEvents.alertError, [err.statusText]);
        });

      ds.query({ url: '/jobs', params: {} })
        .then(response => {
          this.$scope.ctrl.jobsList = response;
          this.$scope.$apply();
        })
        .catch(err => {
          appEvents.emit(AppEvents.alertError, [err.statusText]);
        });

      ds.query({ url: '/scheduled_jobs', params: {} })
        .then(response => {
          this.$scope.ctrl.scheduledList = response;
          this.$scope.$apply();
        })
        .catch(err => {
          appEvents.emit(AppEvents.alertError, [err.statusText]);
        });

      ds.query({ url: '/buckets', params: {} })
        .then(response => {
          this.$scope.ctrl.buckets = response;
        })
        .catch(err => {
          appEvents.emit(AppEvents.alertError, [err.statusText]);
        });
    } catch (err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, [err]);
    }
  }

  /**
   * Displays new ML model dialog
   */
  addModel() {
    this.model = Object.assign({
      ...DEFAULT_MODEL,
      features: [
        {
          ...DEFAULT_FEATURE,
        },
      ],
    });
    appEvents.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
      modalClass: 'confirm-modal',
      model: this,
    });
  }

  editModel(name: any) {
    const model = this.$scope.ctrl.modelsList.find(el => el.settings.name === name);
    this.model = model.settings;
    // appEvents.emit(CoreEvents.showModal, {
    appEvents.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
      modalClass: 'confirm-modal',
      model: this,
    });
  }

  /**
   * Posts dialog data to LoudML server
   */
  async addModelPost() {
    console.log(this.model);

    if (this.model.features[0].default !== 'previous') {
      this.model.features[0].default = 0;
    }

    delete this.model.features[0].$$hashKey;

    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;
    ds.loudml
      .getModel(this.model.name)
      .then(result => {
        console.log('Model exists, updating it...');
        ds.loudml
          .patchModel(this.model.name, this.model)
          .then(result => {})
          .catch(err => {
            sorry_its_error(err);
            return;
          });
        //   // Let remove it and recreate
        //   ds.loudml.deleteModel(this.model.name).then(response => {
        //     ds.loudml
        //       .createModel(this.model)
        //       .then(result => {
        //         ds.loudml
        //           .createModelHook(this.model.name, ds.loudml.createHook(ANOMALY_HOOK, this.model.default_bucket))
        //           .then(result => {
        //             appEvents.emit(AppEvents.alertSuccess, ['Model has been updated on Loud ML server']);
        //             this.refreshModels();
        //           })
        //           .catch(err => {
        //             window.console.log('createModelHook error', err);
        //             appEvents.emit(AppEvents.alertError, [err.message]);
        //             return;
        //           });
        //       })
        //       .catch(err => {
        //         window.console.log('Model create error', err);
        //         appEvents.emit(AppEvents.alertError, ['Model create error', err.data]);
        //         return;
        //       });
        //   });
      })
      .catch(err => {
        // New model
        console.log('New model, creating it...');
        ds.loudml
          .createModel(this.model)
          .then(result => {
            ds.loudml
              .createModelHook(this.model.name, ds.loudml.createHook(ANOMALY_HOOK, this.model.default_bucket))
              .then(result => {
                appEvents.emit(AppEvents.alertSuccess, ['Model has been created on Loud ML server']);
                this.refreshModels();
              })
              .catch(err => {
                window.console.log('createModelHook error', err);
                appEvents.emit(AppEvents.alertError, [err.message]);
                return;
              });
          })
          .catch(err => {
            window.console.log('createModel error', err);
            appEvents.emit(AppEvents.alertError, ['Model create error', err.data]);
            return;
          });
      });
  }

  /**
   * Displays new job dialog
   */
  addJob() {
    this.job = Object.assign({}, DEFAULT_JOB);

    appEvents.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
      modalClass: 'confirm-modal',
      model: this,
    });
  }

  /**
   * Displays edit job dialog
   */
  editJob(name: any) {
    this.job = this.$scope.ctrl.scheduledList.find(el => el.name === name);
    if (this.job.params) {
      this.job.params = JSON.stringify(this.job.params);
    }

    if (this.job.json) {
      this.job.json = JSON.stringify(this.job.json);
    }

    appEvents.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
      modalClass: 'confirm-modal',
      model: this,
    });
  }

  /**
   * Posts job data to LoudML server
   */
  async scheduleJob() {
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;
    ds.loudml
      .scheduleJob(this.job)
      .then(response => {
        window.console.log(response);
        appEvents.emit(AppEvents.alertSuccess, ['Job has been scheduled on Loud ML server']);
        this.refreshModels();
      })
      .catch(error => {
        console.log(error);
        appEvents.emit(AppEvents.alertError, ['Job schedule error', error.statusText]);
      });
  }

  /**
   * Deletes  job on LoudML server
   */
  async deleteJob(name: any) {
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;
    ds.loudml
      .deleteJob(name)
      .then(response => {
        window.console.log(response);
        appEvents.emit(AppEvents.alertSuccess, ['Scheduled job has been deleted on Loud ML server']);
        this.refreshModels();
      })
      .catch(error => {
        appEvents.emit(AppEvents.alertError, ['Job delete error', error.statusText]);
      });
  }

  async startModel(name: any) {
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.startModel(name).then(response => {
        window.console.log(response);
        appEvents.emit(AppEvents.alertSuccess, ['Model has been started on Loud ML server']);
        this.refreshModels();
      });
    } catch (err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model start error', err]);
    }
  }

  async stopModel(name: any) {
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.stopModel(name).then(response => {
        window.console.log(response);
        appEvents.emit(AppEvents.alertSuccess, ['Model has been stoped on Loud ML server']);
        this.refreshModels();
      });
    } catch (err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model stop error', err]);
    }
  }

  async forecastModel(name: any) {
    window.console.log('FORECAST MODEL');
  }

  async trainModel(name: any) {
    window.console.log('TRAIN MODEL');
  }

  async deleteModel(name: any) {
    const ds = (await getDataSourceSrv().loadDatasource(this.current.name)) as LoudMLDatasource;

    try {
      ds.loudml.deleteModel(name).then(response => {
        window.console.log(response);
        appEvents.emit(AppEvents.alertSuccess, ['Model has been deleted on Loud ML server']);
        this.refreshModels();
      });
    } catch (err) {
      console.error(err);
      appEvents.emit(AppEvents.alertError, ['Model delete error', err]);
    }
  }
}
