export default class View {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    if (!element) throw 'no element';

    this.element = element;
    return this;
  }

  render(template: string, target: HTMLElement = this.element) {
    target.innerHTML = template;
  }

  hide() {
    this.element.style.display = 'none';
  }

  show(value = 'block') {
    this.element.style.display = value;
  }
}
