import LayoutView from './pages/components/Layout/LayoutView';
import Router from './router';

export default class App {
  private $body: HTMLElement;

  constructor($body: HTMLElement) {
    this.$body = $body;
    this.initApp();
  }

  private initApp() {
    new LayoutView(this.$body);
    new Router(this.$body);
  }
}
