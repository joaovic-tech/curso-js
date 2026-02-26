import CategoryPage from '@/containers/CategoryPage';
import { getPostsByCategory } from '@/data/posts/get-posts-by-category';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

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
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <CategoryPage posts={posts} />;
}
