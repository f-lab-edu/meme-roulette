import SearchModel from './SearchModel';
import SearchView from './SearchView';

export default class SearchController {
  model: SearchModel;
  view: SearchView;

  constructor(model: SearchModel, view: SearchView) {
    this.model = model;
    this.view = view;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.init();
  }

  addHandlers() {
    this.view.searchFormView?.addHandler(this.handleSubmit);
    this.view.recentKeywordListView?.addHandler(this.handleDelete);
  }

  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const keyword = this.view.searchFormView.getKeyword()?.trim();
    if (!keyword) return;

    this.showRecentKeyword(keyword);
    this.showSearchResult(keyword);
  }

  showRecentKeyword(keyword: string): void {
    if (!keyword) return;
    this.model.setRecentKeywordList(keyword);

    if (this.model.recentKeywordList.length < 1) return;

    this.view.recentKeywordListView.render(this.model.recentKeywordList);
  }

  async showSearchResult(keyword: string): Promise<void> {
    const searchResult = await this.model.searchGifs(keyword);
    this.view.searchResultView.showSearching();
    searchResult && this.view.searchResultView.showResult(searchResult);
  }

  handleDelete(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;

    if (target.className !== 'btn-delete') return;
    const btnKey = target.dataset.key;

    if (!btnKey) return;
    this.model.deleteKeyword(btnKey);
    this.view.recentKeywordListView.render(this.model.recentKeywordList);
  }

  init() {
    this.view.renderPage();
    this.addHandlers();
  }
}
