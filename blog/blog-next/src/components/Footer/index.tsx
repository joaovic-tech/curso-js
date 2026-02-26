import { FooterContainer } from './styles';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>
        © {year} Blog — Feito com ☕ por{' '}
        <a href="https://github.com/joaovic-tech" target="_blank" rel="noopener noreferrer">
          João Victor
        </a>
      </p>
    </FooterContainer>
  );
}

