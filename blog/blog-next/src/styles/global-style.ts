import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }

  body {
    background: #FFF5D8;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.section`
  padding-inline: 12rem;

  @media (max-width: 900px) {
    padding-inline: 4rem;
  }

  .cover {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;
