import View from '../View';
import { qs } from '../../helpers';

export default class SearchResultView extends View {
  constructor() {
    super(qs('#search-result-view-wrapper'));
    this.template = new Template();
  }
  render(data = []) {
    super.render(this.template.getGifs(data));
  }
}

class Template {
  getGifs(data) {
    return `
            <div class="gifs-wrapper">
                ${data.map(this._getGif).join('')}
            </div>
        `;
  }

  _getGif({ imageUrl }) {
    return `
           <img src="${imageUrl}" alt="gif" />
      `;
  }
}
