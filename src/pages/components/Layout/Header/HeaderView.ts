import { navigate } from 'src/utils/helpers';
import 'src/styles/header.scss';
import View from 'src/common/View';
import template from './template';

export default class HeaderView extends View {
  element!: HTMLElement;

  constructor($header: HTMLElement) {
    super($header);

    this.render();
    this.bindEvents();
  }

  render() {
    super.render(template());
  }

  bindEvents(): void {
    this.element.addEventListener('click', event => this.handleNavigate(event));
  }

  handleNavigate(event: MouseEvent) {
    event.preventDefault();
    const url = (event.target as HTMLAnchorElement).getAttribute('href');

    if (!url) return;
    navigate(url);
  }
}
