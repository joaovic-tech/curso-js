import Header from '@/components/Header';
import Posts from '@/components/Posts';
import { CategoryPageProps } from '@/pages/posts/category/[slug]';
import { useEffect, useState } from 'react';
import { Title } from './styles';
import { MainContainer, Section } from '@/styles/global-style';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';

export default function CategoryPage({ posts }: CategoryPageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
  }, [posts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <Header />
      <Section>
        <BackButton />
        <Title>
          Categoria: <span>{posts[0].category.name}</span>
        </Title>
        <Posts posts={posts} />
      </Section>
      <Footer />
    </MainContainer>
  );
}
