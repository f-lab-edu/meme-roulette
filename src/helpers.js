export function qs(selector, scope = document) {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw 'no selector';

  return Array.from(scope.querySelectorAll(selector));
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

export function navigate(url, target = qs('#root')) {
  window.history.pushState('', '', url);
  emit(target, '@navigate', { url });
}
