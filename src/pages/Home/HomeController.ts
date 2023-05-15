import { navigate } from 'utils/helpers';

import HomeModel from './HomeModel';
import HomeView from './HomeView';

export default class HomeController {
  model: HomeModel;
  view: HomeView;

  constructor(model: HomeModel, view: HomeView) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init(): Promise<void> {
    const mainGifData = await this.model.toJson();
    const gifUrl = mainGifData.original.url;
    this.view.render(gifUrl as string);
    this.view.addHandler(this.handleClick);
  }

  handleClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (target.tagName !== 'BUTTON') {
      return;
    }

    const { route } = target.dataset;

    if (!route) return;
    navigate(route);
  }
}
