import requestAPI from '../utils/requesAPI';

export default class Store {
  constructor() {
    this.keywordData = [];
  }

  async searchGifs(keyword = 'cheeseburgers') {
    const params = {
      q: keyword,
      limit: 20,
      rating: 'g',
      lang: 'en',
    };
    const res = await requestAPI(params);
    const { data } = await res.json();
    this.keywordData = data.map(item => item.url);
  }
}
