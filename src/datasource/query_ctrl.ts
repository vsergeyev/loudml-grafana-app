// @ts-nocheck
import template from './partials/query_ctrl.html';

import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class LoudMLQueryCtrl extends QueryCtrl {
  static template = template;

  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);
  }
}
