import { Author } from "./author";

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  isDraft: boolean;
  ogImage: {
    url: string;
  };
  content: string;
}
