import View from 'src/common/View';
import { keywordListTemplate } from '../template';
import { IRecentKeywordList } from '../searchType';

export default class RecentKeywordListView extends View {
  element!: HTMLDivElement;

  constructor() {
    super(
      document.querySelector('.recent-keyword-list-wrap')! as HTMLDivElement
    );
  }

  render(keywordList: IRecentKeywordList[]): void {
    if (keywordList.length < 0) return;
    keywordList.length > 0 ? super.show('flex') : super.hide();

    // Typescript Error!
    /*
    Property 'render' in type 'RecentKeywordListView' is not assignable to the same property in base type 'View'.
    Type '(keywordList: IRecentKeywordList[]) => void' is not assignable to type '(template: string, target?: HTMLElement | HTMLDivElement | HTMLFormElement | undefined) => void'.
    Types of parameters 'keywordList' and 'template' are incompatible.
    Type 'string' is not assignable to type 'IRecentKeywordList[]'.

    14   render(keywordList: IRecentKeywordList[]): void {
     ~~~~~~
     */

    super.render(keywordListTemplate(keywordList));
  }

  addHandler(handler: (event: MouseEvent) => void): void {
    this.element.addEventListener('click', (event: MouseEvent) =>
      handler(event)
    );
  }
}
