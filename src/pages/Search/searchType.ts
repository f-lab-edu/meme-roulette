import { IImages, IUser, URLType } from 'common/types/gif';

export interface IRecentKeywordList {
  keyword: string;
  key: string;
}

export interface ISearchResult {
  id: string;
  gifUrl?: string;
}

export interface IFetchSearchData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: IImages;
  user: IUser;
  analytics_response_payload: string;
  analytics: object;
}

export interface IAnalytics {
  onclick: URLType;
  onload: URLType;
  onsent: URLType;
}
