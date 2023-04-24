import LayoutView from 'pages/components/Layout/LayoutView';
import Router from 'router';

export default class App {
  constructor($body) {
    this.$body = $body;
    this.initApp();
  }

  initApp() {
    new LayoutView(this.$body);
    new Router(this.$body);
  }
}
