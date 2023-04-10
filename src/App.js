import routes from './router';
import { on } from './helpers';
import HeaderView from './views/HeaderView';
import HomeView from './views/HomeView/HomeView';

class App {
  constructor($body) {
    this.$body = $body;
    this.$main = document.createElement('main');
    this.renderHeader();
    this.render();
  }

  renderHeader() {
    const header = new HeaderView(this.$body);
    header.render();
  }

  render() {
    this.$body.appendChild(this.$main);
    this.navigate('/');
    on(this.$body, '@navigate', event => this.navigate(event.detail.url));
  }

  navigate(url) {
    const page = routes.find(route => route.path === url).view;
    page();
  }
}
export default App;
