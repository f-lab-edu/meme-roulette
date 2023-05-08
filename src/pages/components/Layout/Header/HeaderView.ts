import { navigate } from 'src/utils/helpers';
import 'src/styles/header.scss';
import View from 'src/common/View';
import template from './template';

export default class HeaderView extends View {
  constructor($header: HTMLElement) {
    super($header);

    this.render();
    this.bindEvents();
  }

  render() {
    super.render(template());
  }

  bindEvents() {
    document
      .querySelector('ul')!
      .addEventListener('click', event => this.handleNavigate(event));
  }

  handleNavigate(event: MouseEvent) {
    event.preventDefault();
    const url = (event.target as HTMLAnchorElement).getAttribute('href');
    navigate(url);
  }
}
