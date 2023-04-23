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

  show(value = 'block') {
    this.element.style.display = value;
    return this;
  }
}
