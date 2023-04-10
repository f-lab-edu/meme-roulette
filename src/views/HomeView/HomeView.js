import Store from '../../models/Store';
import HomeController from './HomeController';
import MainView from './MainView';

const HomeView = main => {
  const store = new Store();

  const views = {
    mainView: new MainView(main),
  };

  new HomeController(store, views);
};

export default HomeView;
