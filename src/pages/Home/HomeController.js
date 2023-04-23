import { navigate } from 'src/utils/helpers';

export default class HomeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const gifUrl = await this.model.getMainGifUrl();
    this.view.render(gifUrl);
    this.view.addHandler(this.handleClick);
  }

  handleClick(event) {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    const { route } = event.target.dataset;
    navigate(route);
  }
}
