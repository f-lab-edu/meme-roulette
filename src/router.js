import HomeView from './views/HomeView/HomeView';
import RandomView from './views/RandomView/RandomView';
import ReactionView from './views/ReactionView/ReactionView';
import TrendingView from './views/TrendingView/TrendingView';

const routes = () => [
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
    path: '/reaction',
    label: 'REACTION',
    view: ReactionView,
  },
];

export default routes;
