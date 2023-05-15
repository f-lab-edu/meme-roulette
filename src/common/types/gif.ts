export interface IGifData {
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: IImages;
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  user: IUser;
  username: string;
}

export interface IImages {
  original: IImagesInfo;
  downsized: IImagesInfo;
  downsized_large: IImagesInfo;
  downsized_medium: IImagesInfo;
  downsized_small: IImagesInfo;
  downsized_still: IImagesInfo;
  fixed_height: IImagesInfo;
  fixed_height_downsampled: IImagesInfo;
  fixed_height_small: IImagesInfo;
  fixed_height_small_still: IImagesInfo;
  fixed_height_still: IImagesInfo;
  fixed_width: IImagesInfo;
  fixed_width_downsampled: IImagesInfo;
  fixed_width_small: IImagesInfo;
  fixed_width_small_still: IImagesInfo;
  fixed_width_still: IImagesInfo;
  looping: IImagesInfo;
  original_still: IImagesInfo;
  original_mp4: IImagesInfo;
  preview: IImagesInfo;
  preview_gif: IImagesInfo;
  preview_webp: IImagesInfo;
}

export interface IImagesInfo {
  height: string;
  width: string;
  url?: string;
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
}

export interface IUser {
  [key: string]: string | boolean;
}

export type URLType = {
  url: string;
};
