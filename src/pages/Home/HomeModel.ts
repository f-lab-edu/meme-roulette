import axiosClient from 'libs/axios';
import { IGifData, IImages } from 'common/types/gif';

export default class HomeModel {
  constructor() {
    this.init();
  }

  async fetchGif(): Promise<IGifData> {
    return axiosClient
      .get('/random', {
        params: {
          tag: 'hello',
          rating: 'g',
        },
      })
      .then(res => res.data.data);
  }

  async toJson(): Promise<IImages> {
    const { images } = await this.fetchGif();
    return images;
  }

  init() {
    this.toJson();
  }
}
