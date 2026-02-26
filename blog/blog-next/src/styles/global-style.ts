import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
`;

export const Section = styled.section`
  padding-inline: 12rem;

  @media (max-width: 900px) {
    padding-inline: 4rem;
  }

  .cover {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
  }
`;
