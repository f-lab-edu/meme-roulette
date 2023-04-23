export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

export function navigate(url) {
  window.history.pushState('', '', url);
  emit(document.querySelector('#root'), '@navigate', { url });
}
