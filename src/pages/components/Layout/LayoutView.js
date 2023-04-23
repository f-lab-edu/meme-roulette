import HeaderView from './Header/HeaderView';

export default class LayoutView {
  constructor($body) {
    this.$body = $body;
    this.$header = document.createElement('header');
    this.$main = document.createElement('main');
    this.render();
  }

  render() {
    this.$body.appendChild(this.$header);
    this.$body.appendChild(this.$main);

    new HeaderView(this.$header);
  }
}
