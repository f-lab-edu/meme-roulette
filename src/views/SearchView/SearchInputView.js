import View from '../View';
import { on, qs } from '../../helpers';
import '../../styles/searchInputView.scss';

export default class SearchInputView extends View {
  constructor() {
    super(qs('#search-view-wrapper'));
    this.template = new Template();
    this.render();
    this.inputElement = qs('input', this.element);
    this.formElement = qs('form', this.element);
    this.bindEvents();
  }
  render() {
    super.render(this.template.getInputBox());
  }

  bindEvents() {
    on(this.formElement, 'submit', event => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.inputElement;
    this.emit('@submit', { value });
  }
}

class Template {
  getInputBox() {
    return `
      <form id="search-form">
        <input type="text" placeholder="검색어를 입력하세요" autofocus />
        <button type="reset" class="btn-reset">x</button>
<!--        <button type="submit">검색</button>-->
      </form>
    `;
  }
}
