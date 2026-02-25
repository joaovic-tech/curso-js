import { POST_CATEGORY_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPostsByCategory = async (
  category: string,
): Promise<PostData[]> => {
  const posts = await fetchJson<{ data: PostData[] }>(
    POST_CATEGORY_URL(category),
  );
  return posts.data;
};
