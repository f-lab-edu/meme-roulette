import View from 'common/View';
import template from './template';
import './searchView.scss';

import {
  RecentKeywordListView,
  SearchFormView,
  SearchResultView,
} from './index';

export default class SearchView extends View {
  recentKeywordListView!: RecentKeywordListView;
  searchFormView!: SearchFormView;
  searchResultView!: SearchResultView;

  constructor() {
    super(document.querySelector('main')! as HTMLDivElement);
  }

  renderPage() {
    super.render(template());

    this.recentKeywordListView = new RecentKeywordListView();
    this.searchFormView = new SearchFormView();
    this.searchResultView = new SearchResultView();
  }
}
