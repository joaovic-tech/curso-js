import { PostData } from '@/domain/posts/post';
import { PostsStyles, PostStyles, PostTitle } from './styles';
import Link from 'next/link';
import Image from 'next/image';

export default function Posts({ posts }: { posts: PostData[] }) {
  return (
    <PostsStyles>
      {posts.map((post) => (
        <PostStyles key={post.id}>
          <Link href={`/post/${post.documentId}`}>
            <Image
              src={post.cover.url}
              alt={post.title}
              width={500}
              height={500}
            />

            <PostTitle>{post.title}</PostTitle>
          </Link>
        </PostStyles>
      ))}
    </PostsStyles>
  );
}
