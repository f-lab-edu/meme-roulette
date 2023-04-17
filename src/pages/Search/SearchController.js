/* eslint-disable no-unused-expressions */
import { SearchFormView, RecentKeywordListView } from 'pages/Search';
import SearchResultView from './views/components/SearchResultView';

export default class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.components = {};
    this.init();
  }

  addHandlers() {
    this.components.searchFormView.addHandler(this.handleSubmit);
    this.components.recentKeywordListView.addHandler(this.handleDelete);
  }

  // 화살표 함수로 만들어 인스턴스에 자동 binding 되도록 함.
  handleSubmit = e => {
    e.preventDefault();
    const keyword = this.components.searchFormView.getKeyword().trim();
    this.controlRecentKeyword(keyword);
    this.controlSearchResult(keyword);
  };

  controlRecentKeyword(keyword) {
    if (!keyword) return;
    this.model.setRecentKeywordList(keyword);
    this.components.recentKeywordListView.render(this.model.recentKeywordList);
  }

  async controlSearchResult(keyword) {
    const searchResult = await this.model.searchGifs(keyword);
    this.components.searchResultView.showSearching();
    searchResult && this.components.searchResultView.showResult(searchResult);
  }

  handleDelete = e => {
    if (e.target.className !== 'btn-delete') return;
    const btnKey = e.target.dataset.key;
    this.model.deleteKeyword(btnKey);
    this.components.recentKeywordListView.render(this.model.recentKeywordList);
  };

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
