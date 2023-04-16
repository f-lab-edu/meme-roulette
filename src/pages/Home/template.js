const MAIN_CONTENTS = [
  { title: 'My Lucky Meme', koreanTitle: '오늘의 내 짤 뽑기', path: '/random' },
  { title: 'Trending', koreanTitle: '요즘 유행하는 짤', path: '/trending' },
  { title: 'Search Memes', koreanTitle: '검색어로 짤 찾기', path: '/search' },
];

const template = gifUrl => {
  return `
    <div id="home">
    <h1>FIND YOUR MEME</h1>
    <div class="image-wrap">
    <img
        src=${gifUrl}
        alt="giphy"
    />
    </div>
    <div class="contents-wrap">
    ${MAIN_CONTENTS.map(
      ({ title, koreanTitle, path }) =>
        `
    <div class="content">
        <span class="title">${title}</span>
        <span>${koreanTitle}</span>
        <button data-route="${path}">보러가기 ></button>
    </div>`
    ).join('')}
    </div>
    </div>
    `;
};

export default template;
