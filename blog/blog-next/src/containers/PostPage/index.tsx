import { PostProps } from '@/pages/post/[slug]';
import Image from 'next/image';
import { Paragraph, SectionTop, Span, Title } from './styles';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { MainContainer, Section } from '@/styles/global-style';
import Footer from '@/components/Footer';

export default function PostPage({ post }: PostProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <MainContainer>
      <Header />
      <Section>
        <SectionTop>
          <BackButton />
          <Title>{post.title}</Title>
          <br />
        </SectionTop>
        <Image src={post.cover.url} alt={post.title} width={0} height={0} sizes="100vw" className="cover" />
        <Paragraph>
          Publicado em {formatDate(post.createdAt)} por {post.author.name} em{' '}
          <Link href={`/posts/category/${post.category.name}`}>
            <Span>{post.category.name}</Span>
          </Link>
        </Paragraph>
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </Markdown>
      </Section>
      <Footer />
    </MainContainer>
  );
}
