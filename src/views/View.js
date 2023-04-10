import { on, emit } from '../helpers';

export default class View {
  constructor(element) {
    if (!element) throw 'no element';

    this.element = element;
    return this;
  }

  render(template) {
    this.element.innerHTML = template;
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = 'visible';
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
