import axiosClient from 'libs/axios';
import makeRandomKey from 'utils/makeRandomKey';
import {
  IFetchSearchData,
  IRecentKeywordList,
  ISearchResult,
} from './searchType';

export default class SearchModel {
  recentKeywordList: IRecentKeywordList[];

  constructor() {
    this.recentKeywordList = [];
  }

  setRecentKeywordList(keyword: string): void {
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

  async fetchSearch(keyword: string): Promise<IFetchSearchData[]> {
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
      .then(res => res.data.data);
  }

  async searchGifs(keyword: string): Promise<ISearchResult[]> {
    const dataArr = await this.fetchSearch(keyword);

    return dataArr.map(({ id, images }) => ({
      id,
      gifUrl: images?.fixed_width.url,
    }));
  }

  deleteKeyword(key: string) {
    this.recentKeywordList = this.recentKeywordList.filter(
      item => item.key !== key
    );
  }
}
