import View from 'src/common/View';
import {
  searchingTemplate,
  searchResultTemplate,
  emptyTemplate,
} from '../template';
import { ISearchResult } from '../searchType';

export default class SearchResultView extends View {
  constructor() {
    super(document.querySelector('.gif-list-wrapper')! as HTMLDivElement);
  }

  showResult(searchResult: ISearchResult[]) {
    super.render(
      searchResult?.length > 0
        ? searchResultTemplate(searchResult)
        : emptyTemplate()
    );
  }

  showSearching() {
    super.render(searchingTemplate());
  }
}
