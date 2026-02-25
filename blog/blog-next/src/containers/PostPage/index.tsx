import { PostProps } from '@/pages/post/[slug]';
import Image from 'next/image';
import { BackButton, Content, Paragraph, Section, Span, Title } from './styles';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <Section key={post.id}>
      <Header />
      {/* Botão de voltar flutuante usando o Next */}
      <Link href="/">
        <BackButton>Voltar</BackButton>
      </Link>
      <Content>
        <Title>{post.title}</Title>
        <Image src={post.cover.url} alt={post.title} width={500} height={500} />
        <Paragraph>
          Publicado em {formatDate(post.createdAt)} por {post.author.name} em{' '}
          <Link href={`/posts/category/${post.category.name}`}>
            <Span>{post.category.name}</Span>
          </Link>
        </Paragraph>
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </Content>
    </Section>
  );
}
