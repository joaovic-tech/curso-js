import { POST_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (id: string): Promise<PostData> => {
  const posts = await fetchJson<{ data: PostData }>(POST_URL(id));
  return posts.data;
};
