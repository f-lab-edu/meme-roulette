import Store from '../../models/Store';
import HomeController from '../../controllers/HomeController';
import MainView from './MainView';
import { qs } from '../../helpers';

const HomeView = () => {
  qs('main').innerHTML = `<div id="main-view-wrapper"></div>`;
  const store = new Store();

  const views = {
    mainView: new MainView(),
  };

  new HomeController(store, views);
};

export default HomeView;
