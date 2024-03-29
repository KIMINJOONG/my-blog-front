export interface IPost {
  id: number;
  title: string;
  content: string;
  view: number;
  thumbnail: string;
  category: ICategory;
  createdAt: string;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
}
