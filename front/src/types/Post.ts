export interface Post {
  post_id: number;
  human_content: string;
  animal_content: string;
  created_at: string;
  user_id: number;
  username: string;
  nickname: string;
  user_image_url: null | string;
  post_contents_urls: string;
  contents_url_array: string[];
  numOfComments: number;
  numOfHearts: number;
  is_heart: number;
}

export type Posts = Post[];

export type PostsResponse = {
  lastPostId: number;
  posts: Posts;
};