import View from '../View';
import { qs, navigate } from '../../helpers';
import '../../styles/mainView.scss';

import { mainContents } from '../../constants';

export default class MainView extends View {
  constructor() {
    super(qs('#main-view-wrapper'));

    this.template = new Template();
    this.render();
    this.bindEvents();
  }

  render() {
    super.render(this.template.getMain());
  }

  bindEvents() {
    super.on('click', event => this.handleClick(event));
  }

  handleClick(event) {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    const { route } = event.target.dataset;
    navigate(route);
  }
}

class Template {
  getMain() {
    return `      
        <h1>FIND YOUR MEME</h1>
        <div class="image-wrap">
        <img
            src="https://media0.giphy.com/media/u5quLr404dKprdhg8k/giphy.gif"
            alt="giphy"
        />
        </div>
        <div class="contents-wrap">
        ${mainContents.map(content => this._getContent(content)).join('')}
        </div>
        `;
  }

  _getContent({ title, koreanTitle, path }) {
    return `
    <div class="content">
        <span class="title">${title}</span>
        <span>${koreanTitle}</span>
        <button data-route="${path}">보러가기 ></button>
     </div>
  `;
  }
}
