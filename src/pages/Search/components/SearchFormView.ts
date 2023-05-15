import View from 'src/common/View';

export default class SearchFormView extends View {
  element!: HTMLFormElement;

  constructor() {
    super(document.querySelector('.search-form-view')! as HTMLFormElement);
  }

  getKeyword() {
    return this.element.querySelector('input')?.value;
  }

  addHandler(handler: (event: SubmitEvent) => void): void {
    this.element.addEventListener('submit', event => handler(event));
  }
}
