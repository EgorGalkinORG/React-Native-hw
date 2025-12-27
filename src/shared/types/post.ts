export interface Comment {
  id: number;
  body: string;
  createdAt: string;
  postId: number;
  authorId: number;
}

export interface User {
  id: number;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  likes: number;
  tags: PostTag[];
  comments?: Comment[];
  likedBy?: User[]; 
}