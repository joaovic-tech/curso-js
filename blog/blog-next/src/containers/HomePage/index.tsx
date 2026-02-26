import { PostData } from '@/domain/posts/post';
import Header from '@/components/Header';
import Posts from '@/components/Posts';
import { MainContainer, Section } from '@/styles/global-style';
import Image from 'next/image';
import { HeaderHome, HeaderHomeLeft, HeaderHomeRight } from './styles';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Footer from '@/components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <MainContainer>
      <Header />
      <Section>
        <HeaderHome>
          <HeaderHomeLeft>
            <Image src="https://avatars.githubusercontent.com/u/79641024?v=4" alt="João Victor" width={240} height={240} />
            <div>
              <h1>João Victor</h1>
              <p>Um desenvolvedor web apaixonado por tecnologia e café, aqui eu compartilho um pouco do meu conhecimento e experiências.</p>
            </div>
          </HeaderHomeLeft>
          <HeaderHomeRight>
            <h1>Redes Sociais</h1>
            <ul>
              <li>
                <Link className="link-github" href="https://github.com/joaovic-tech" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
              </li>

              <li>
                <Link className="link-linkedin" href="https://linkedin.com/in/joaovic-tech" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link className="link-x" href="https://x.com/joaovic_tech" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link className="link-instagram" href="https://instagram.com/joaovic_tech" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </HeaderHomeRight>
        </HeaderHome>
        <Posts posts={posts} />
      </Section>
      <Footer />
    </MainContainer>
  );
}
