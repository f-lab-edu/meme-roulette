import View from 'src/pages/View';
import template from './template';
import './homeView.scss';

export default class HomeView extends View {
  constructor() {
    super(document.querySelector('main'));
  }

  render(gifUrl) {
    super.render(template(gifUrl));
  }

  addHandler(handler) {
    const contentsWrap = document.querySelector('.contents-wrap');
    contentsWrap.addEventListener('click', e => handler(e));
  }
}
