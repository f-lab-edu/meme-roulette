const template = () => {
  return `
        <div id="search-view-wrapper">
            <form class="search-form-view">
                <input type="text" placeholder="검색어를 입력하세요" autofocus />
                <button type="reset" class="btn-reset">X</button>
                <button type="submit" class="btn-submit">확인</button>
            </form>
            <div class="recent-keyword-list-wrap"></div>
            <div class="gif-list-wrapper"></div>
      `;
};

export const keywordListTemplate = keywordList => {
  return `
  <span class="title">최근검색어</span>
  <ul class="list-wrapper">
    ${keywordList
      .map(
        ({ keyword, key }) => `
      <li>${keyword}<button class="btn-delete" data-key=${key}>x</button></li>
    `
      )
      .join('')}
  </ul>
    `;
};

export const searchingTemplate = () => {
  return `<div class="searching">검색중...</div>`;
};

export const emptyTemplate = () => {
  return `<div class="searching">검색 결과가 없습니다.</div>`;
};

export const searchResultTemplate = searchedGifList => {
  return searchedGifList
    .map(
      ({ id, gifUrl }) =>
        `
      <div class="gif-wrapper" data-id=${id}>
      <div class="layer"></div>
      <img src=${gifUrl} alt="giphy"  />
      </div>`
    )
    .join('');
};

export default template;
