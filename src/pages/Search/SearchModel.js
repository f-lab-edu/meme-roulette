import axiosClient from 'libs/axios';
import makeRandomKey from 'utils/makeRandomKey';

export default class SearchModel {
  constructor() {
    this.recentKeywordList = [];
  }

  setRecentKeywordList(keyword) {
    if (this.recentKeywordList[0]?.keyword === keyword) return;

    const newItem = { keyword, key: makeRandomKey(5) };
    const existingIndex = this.recentKeywordList.findIndex(
      item => item.keyword === keyword
    );
    if (existingIndex >= 0) {
      this.recentKeywordList.splice(existingIndex, 1);
    }
    this.recentKeywordList.unshift(newItem);
  }

  async fetchSearch(keyword) {
    return axiosClient
      .get('/search', {
        params: {
          q: keyword,
          tag: 'hello',
          rating: 'g',
          lang: 'ko',
          limit: 25,
        },
      })
      .then(res => res.data);
  }

  async searchGifs(keyword) {
    const { data } = await this.fetchSearch(keyword);

    const searchResult = data.map(({ id, images }) => ({
      id,
      gifUrl: images.fixed_width.url,
    }));

    return searchResult;
  }

  deleteKeyword(key) {
    this.recentKeywordList = this.recentKeywordList.filter(
      item => item.key !== key
    );
  }
}
