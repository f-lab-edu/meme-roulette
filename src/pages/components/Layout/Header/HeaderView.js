import { navigate } from 'src/utils/helpers';
import 'src/styles/header.scss';
import View from 'src/pages/View';
import template from './template';

export default class HeaderView extends View {
  constructor($header) {
    super($header);

    this.render();
    this.bindEvents();
  }

  render() {
    super.render(template());
  }

  async bindEvents() {
    document
      .querySelector('ul')
      .addEventListener('click', event => this.handleNavigate(event));
  }

  handleNavigate(event) {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    navigate(url);
  }
}
