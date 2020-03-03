import configTemplate from './partials/config.html';


export class LoudMLConfigCtrl {
  public static template = configTemplate;
  public ACCESS_OPTIONS = [
    { key: 'proxy', value: 'Server (Default)' },
    { key: 'direct', value: 'Browser' }
  ];

  public showAccessHelp = false;

  constructor(private $scope: any) {
    if(this.$scope.current === undefined) {
      this.$scope.current = {
        url: '',
        access: 'proxy'
      };
    }
  }

  toggleAccessHelp() {
    this.showAccessHelp = !this.showAccessHelp;
  }
}
