import { IPost } from "./model";

export interface ICommonFetchResponse<T> {
  data: T;
}
export interface ILoadPostsResponse {
  totalCount: number;
  posts: IPost[];
}

export interface IGetPostResponse {
  data: IPost;
}
