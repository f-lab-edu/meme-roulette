import HomeView from './views/HomeView/HomeView';
import RandomView from './views/RandomView/RandomView';
import SearchView from './views/SearchView/SearchView';
import TrendingView from './views/TrendingView/TrendingView';

const routes = [
  { path: '/', label: 'HOME', view: HomeView },
  {
    path: '/trending',
    label: 'TRENDING',
    view: TrendingView,
  },
  {
    path: '/random',
    label: 'RANDOM',
    view: RandomView,
  },
  {
    path: '/search',
    label: 'SEARCH',
    view: SearchView,
  },
];

export default routes;
