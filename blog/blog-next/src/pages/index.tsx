import { GetStaticProps } from 'next';
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
  if (!posts) {
    return <Loading />;
  }

  return <HomePage posts={posts} />;
}
