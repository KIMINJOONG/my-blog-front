import { IPost } from "./model";

export interface ILoadPostsResponse {
  totalCount: number;
  posts: IPost[];
}
