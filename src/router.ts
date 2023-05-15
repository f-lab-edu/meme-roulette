import { HomeController, HomeView, HomeModel } from './pages/Home';
import { SearchController, SearchModel, SearchView } from './pages/Search';

interface IRoute {
  path: string;
  controller: () => void;
}

export default class Router {
  $body: HTMLDivElement;
  routes: IRoute[];

  constructor($body: HTMLDivElement) {
    this.$body = $body;

    this.routes = this.createRoutes();

    this.createRouter();
  }

  createRoutes = (): IRoute[] => {
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

  createRouter(): void {
    window.addEventListener('DOMContentLoaded', () => this.navigate());
    window.addEventListener('popstate', () => this.navigate());
    this.$body.addEventListener('@navigate', () => this.navigate());
  }

  navigate(): void {
    const currentRoute = this.routes.find(
      route => route.path === location.pathname
    );
    currentRoute?.controller();
  }
}
