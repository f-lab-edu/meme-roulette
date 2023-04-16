import axiosClient from 'libs/axios';

export default class HomeModel {
  async getMainGifUrl() {
    const { data } = await axiosClient.get('/random', {
      params: {
        tag: 'hello',
        rating: 'g',
      },
    });

    const gifUrl = data.data.images.original.url;
    return gifUrl;
  }
}
