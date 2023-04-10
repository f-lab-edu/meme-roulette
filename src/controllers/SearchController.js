export default class SearchController {
  constructor(store, { searchInputView, searchResultView }) {
    this.store = store;
    this.searchInputView = searchInputView;
    this.searchResultView = searchResultView;
    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.searchInputView.on('@submit', event =>
      this.search(event.detail.value)
    );
  }
  render() {
    this.searchResultView.render(this.store.keywordData);
  }

  search(keyword) {
    if (!keyword) return;
    console.log(keyword);
    this.store.searchGifs(keyword);
    this.render();
  }
}
