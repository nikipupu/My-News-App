export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath: string;
}

export interface Tag {
  id: number;
  value: string;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  coverPath: string;
  author: Author;
  tags: Tag[];
  rating: number;
  commentsCount: number;
  createdAt: string;
}
