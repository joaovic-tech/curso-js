import CategoryPage from '@/containers/CategoryPage';
import { getPostsByCategory } from '@/data/posts/get-posts-by-category';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export type CategoryPageProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const posts = await getPostsByCategory(slug);
  return {
    props: {
      posts,
    },
  };
};

export default function Category({ posts }: CategoryPageProps) {
  return <CategoryPage posts={posts} />;
}
