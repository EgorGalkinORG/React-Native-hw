export interface Tag {
  id: number;
  name: string;
}

export interface PostTag {
  tag: Tag;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  likes: number;
  tags: PostTag[];
}
