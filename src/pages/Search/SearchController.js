/* eslint-disable no-unused-expressions */
import {
  SearchFormView,
  RecentKeywordListView,
  SearchResultView,
} from 'pages/Search';

export default class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.components = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.init();
  }

  addHandlers() {
    this.components.searchFormView.addHandler(this.handleSubmit);
    this.components.recentKeywordListView.addHandler(this.handleDelete);
  }

  handleSubmit(e) {
    e.preventDefault();
    const keyword = this.components.searchFormView.getKeyword().trim();
    this.showRecentKeyword(keyword);
    this.showSearchResult(keyword);
  }

  showRecentKeyword(keyword) {
    if (!keyword) return;
    this.model.setRecentKeywordList(keyword);
    this.components.recentKeywordListView.render(this.model.recentKeywordList);
  }

  async showSearchResult(keyword) {
    const searchResult = await this.model.searchGifs(keyword);
    this.components.searchResultView.showSearching();
    searchResult && this.components.searchResultView.showResult(searchResult);
  }

  handleDelete(e) {
    if (e.target.className !== 'btn-delete') return;
    const btnKey = e.target.dataset.key;
    this.model.deleteKeyword(btnKey);
    this.components.recentKeywordListView.render(this.model.recentKeywordList);
  }

  init() {
    this.view.renderPage();
    this.components = {
      searchFormView: new SearchFormView(),
      recentKeywordListView: new RecentKeywordListView(),
      searchResultView: new SearchResultView(),
    };
    this.addHandlers();
  }
}
