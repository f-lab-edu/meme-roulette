export function emit(target: HTMLElement, eventName: string, detail: object) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

export function navigate(url: string) {
  if (!url) return;

  window.history.pushState('', '', url);
  emit(document.querySelector('#root')!, '@navigate', { url });
}
