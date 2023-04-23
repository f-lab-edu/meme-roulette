import View from 'src/pages/View';
import { keywordListTemplate } from '../template';

export default class RecentKeywordListView extends View {
  constructor() {
    super(document.querySelector('.recent-keyword-list-wrap'));
  }

  render(keywordList) {
    keywordList.length > 0 ? super.show('flex') : super.hide();
    super.render(keywordListTemplate(keywordList));
  }

  addHandler(handler) {
    this.element.addEventListener('click', e => handler(e));
  }
}
