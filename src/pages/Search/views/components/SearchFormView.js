import View from 'src/pages/View';

export default class SearchFormView extends View {
  constructor() {
    super(document.querySelector('.search-form-view'));
  }

  getKeyword() {
    return this.element.querySelector('input').value;
  }

  addHandler(handler) {
    this.element.addEventListener('submit', e => handler(e));
  }
}
