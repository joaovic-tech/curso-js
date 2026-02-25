export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const POSTS_URL = `${API_URL}/api/posts?populate=*`;
export const POST_URL = (id: string) => `${API_URL}/api/posts/${id}?populate=*`;
export const POST_CATEGORY_URL = (categoryName: string) =>
  `${API_URL}/api/posts?populate=*&filters[category][name][$eq]=${categoryName}`;
export const SITE_NAME = 'João Victor';
