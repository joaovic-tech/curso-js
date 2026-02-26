import PostPage from '@/containers/PostPage';
import { getPost } from '@/data/posts/get-post';
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
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <PostPage post={post} />;
}
