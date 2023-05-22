const ROUTES = [
  { path: '/', label: 'HOME' },
  {
    path: '/trending',
    label: 'TRENDING',
  },
  {
    path: '/random',
    label: 'RANDOM',
  },
  {
    path: '/search',
    label: 'SEARCH',
  },
];

const template = () => {
  return `
    <h1 class="logo">
      <a href="/">meme roulette</a>
    </h1>
    <nav>
      <ul>
      ${ROUTES.map(
        ({ path, label }) =>
          `
          <li class="menu">
          <a href="${path}">${label}</a>
           </li>`
      ).join('')}
      </ul>
    </nav>
    ` as string;
};

export default template;
