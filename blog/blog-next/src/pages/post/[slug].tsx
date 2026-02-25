import PostPage from '@/containers/PostPage';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export type PostProps = {
  post: PostData;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
};

export default function Post({ post }: PostProps) {
  return <PostPage post={post} />;
}
