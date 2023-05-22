export default class View {
  element?: HTMLElement | HTMLFormElement | HTMLDivElement;

  constructor(element: HTMLElement | HTMLFormElement | HTMLDivElement) {
    if (!element) throw 'no element';

    this.element = element;
    return this;
  }

  render(template: string, target = this.element) {
    if (!target) return;
    target.innerHTML = template;
  }

  hide() {
    if (!this.element) return;
    this.element.style.display = 'none';
  }

  show(value = 'block') {
    if (!this.element) return;
    this.element.style.display = value;
  }
}
