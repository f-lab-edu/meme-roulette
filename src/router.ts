import { HomeController, HomeView, HomeModel } from './pages/Home';
import { SearchController, SearchModel, SearchView } from './pages/Search';

interface IRoute {
  path: string;
  controller: () => void;
}

export default class Router {
  private $body: HTMLElement;
  private routes: IRoute[];

  constructor($body: HTMLElement) {
    this.$body = $body;
    this.routes = this.createRoutes();
    this.createRouter();
  }

  createRoutes = () => {
    const homeModel = new HomeModel();
    const homeView = new HomeView();

    const searchModel = new SearchModel();
    const searchView = new SearchView();

    return [
      {
        path: '/',
        controller: () => new HomeController(homeModel, homeView),
      },
      { path: '/trending', controller: () => console.log('trending') },
      { path: '/random', controller: () => console.log('random') },
      {
        path: '/search',
        controller: () => new SearchController(searchModel, searchView),
      },
    ];
  };

  createRouter() {
    window.addEventListener('DOMContentLoaded', () => this.navigate());
    window.addEventListener('popstate', () => this.navigate());
    this.$body.addEventListener('@navigate', () => this.navigate());
  }

  navigate() {
    const { controller: createPage } = this.routes.find(
      route => route.path === location.pathname
    );
    createPage();
  }
}
