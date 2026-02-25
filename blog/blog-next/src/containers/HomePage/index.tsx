import { PostData } from '@/domain/posts/post';
import { Container } from './styles';
import Header from '@/components/Header';
import Posts from '@/components/Posts';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      <Header />
      <Posts posts={posts} />
    </Container>
  );
}
