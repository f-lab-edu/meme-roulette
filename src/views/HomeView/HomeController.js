import MainView from './MainView';

export default class HomeController {
  constructor(store, { mainView }) {
    this.mainView = mainView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {}

  render() {
    this.mainView.render();
  }
}
