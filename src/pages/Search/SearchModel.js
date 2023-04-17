import axiosClient from 'libs/axios';
import makeRandomKey from 'utils/makeRandomKey';

export default class SearchModel {
  constructor() {
    this.recentKeywordList = [];
  }

  setRecentKeywordList(keyword) {
    const newItem = { keyword, key: makeRandomKey(5) };
    this.recentKeywordList.unshift(newItem);
  }

  async searchGifs(keyword) {
    const { data } = await axiosClient.get('/search', {
      params: {
        q: keyword,
        tag: 'hello',
        rating: 'g',
        lang: 'ko',
        limit: 25,
      },
    });

    const searchResult = data.data.map(({ id, images }) => ({
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
