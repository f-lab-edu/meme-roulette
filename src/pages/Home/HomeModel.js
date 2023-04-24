import axiosClient from 'libs/axios';

export default class HomeModel {
  constructor() {
    this.init();
  }

  async fetchGif() {
    return axiosClient
      .get('/random', {
        params: {
          tag: 'hello',
          rating: 'g',
        },
      })
      .then(res => res.data);
  }

  async toJson() {
    const { data } = await this.fetchGif();
    return data;
  }

  init() {
    this.toJson();
  }
}
