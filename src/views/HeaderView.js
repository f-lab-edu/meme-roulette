import routes from '../router';
import { qs, on, qsAll, emit, navigate } from '../helpers';
import '../styles/header.scss';

export default class HeaderView {
  constructor($body) {
    this.$body = $body;
    this.template = new Template();
    this.bindEvents();
  }

  render() {
    this.$body.innerHTML = this.template.getHeader();
  }

  async bindEvents() {
    const header = await this.template;
    header && on(qs('ul'), 'click', event => this.handleNavigate(event));
  }

  handleNavigate(event) {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    navigate(url);
    // view name 맞는
  }
}

class Template {
  getHeader() {
    return `
    <header>
    <h1 class="logo">
      <a href="/">meme roulette</a>
    </h1>
    <nav>
      <ul>
      ${routes.map(this._getItem).join('')}
      </ul>
    </nav>
  </header>
    `;
  }

  _getItem({ path, label, view }) {
    return `
    <li class="menu">
      <a href="${path}">${label}</a>
    </li>
    `;
  }
}
