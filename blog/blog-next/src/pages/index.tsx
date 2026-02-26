import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import HomePage from '@/containers/HomePage';
import Loading from '@/components/Loading';

export type HomeProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <HomePage posts={posts} />;
}
