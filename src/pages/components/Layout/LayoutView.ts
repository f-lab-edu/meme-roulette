import HeaderView from './Header/HeaderView';

export default class LayoutView {
  $body: HTMLDivElement;
  $header: HTMLElement;
  $main: HTMLElement;

  constructor($body: HTMLDivElement) {
    this.$body = $body;
    this.$header = document.createElement('header');
    this.$main = document.createElement('main');
    this.render();
  }

  render(): void {
    this.$body.appendChild(this.$header);
    this.$body.appendChild(this.$main);

    new HeaderView(this.$header);
  }
}
