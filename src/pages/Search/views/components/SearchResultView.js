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
    super.render(
      searchResult.length > 0
        ? searchResultTemplate(searchResult)
        : emptyTemplate()
    );
  }

  showSearching() {
    super.render(searchingTemplate());
  }
}
