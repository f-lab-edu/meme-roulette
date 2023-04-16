import View from 'src/pages/View';
import { keywordListTemplate } from '../template';

export default class RecentKeywordListView extends View {
  constructor() {
    super(document.querySelector('.recent-keyword-list-wrap'));
  }

  show(keywordList) {
    super.render(keywordListTemplate(keywordList));
  }
}
