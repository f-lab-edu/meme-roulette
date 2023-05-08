import HeaderView from './Header/HeaderView';

export default class LayoutView {
  private $body: HTMLElement;
  private $header: HTMLElement;
  private $main: HTMLElement;

  constructor($body: HTMLElement) {
    this.$body = $body;
    this.$header = document.createElement('header');
    this.$main = document.createElement('main');
    this.render();
  }

  private render(): void {
    this.$body.appendChild(this.$header);
    this.$body.appendChild(this.$main);

    new HeaderView(this.$header);
  }
}
