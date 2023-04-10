import Store from '../../models/Store';
import SearchInputView from './SearchInputView';
import SearchResultView from './SearchResultView';
import SearchController from '../../controllers/SearchController';
import { qs } from '../../helpers';

const tag = '[search]';

const SearchView = () => {
  qs('main').innerHTML = `<div id="search-view-wrapper"></div>
   <div id="search-result-view-wrapper"></div>`;

  const store = new Store();

  const views = {
    searchInputView: new SearchInputView(),
    searchResultView: new SearchResultView(),
  };

  new SearchController(store, views);
};

export default SearchView;
