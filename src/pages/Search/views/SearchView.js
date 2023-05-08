import View from 'src/common/View.ts';
import template from './template';
import './searchView.scss';

export default class SearchView extends View {
  constructor() {
    super(document.querySelector('main'));
  }

  renderPage() {
    super.render(template());
  }
}
