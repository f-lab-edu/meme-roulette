export default class View {
  constructor(element) {
    if (!element) throw 'no element';

    this.element = element;
    return this;
  }

  render(template, target = this.element) {
    target.innerHTML = template;
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show(target = this.element) {
    target.style.display = 'visible';
    return this;
  }
}
