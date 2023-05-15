import View from 'common/View';
import template from './template';
import './homeView.scss';

export default class HomeView extends View {
  constructor() {
    super(document.querySelector('main')! as HTMLElement);
  }

  render(gifUrl: string) {
    super.render(template(gifUrl));
  }

  addHandler(handler: (event: Event) => void) {
    const contentsWrap = document.querySelector('.contents-wrap');
    contentsWrap?.addEventListener('click', (event: Event) => handler(event));
  }
}
