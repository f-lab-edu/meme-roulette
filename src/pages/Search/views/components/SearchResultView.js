import View from 'src/pages/View';
import {
  searchingTemplate,
  searchResultTemplate,
  emptyTemplate,
} from '../template';

export default class SearchResultView extends View {
  constructor() {
    super(document.querySelector('.gif-list-wrapper'));
  }

  showResult(searchResult) {
    if (searchResult.length < 1) {
      super.render(emptyTemplate());
      return;
    }
    super.render(searchResultTemplate(searchResult));
  }

  showSearching() {
    super.render(searchingTemplate());
  }
}
