import styled from 'styled-components';

export const Content = styled.header`
  background: #000;
  padding: 2rem;
  text-align: center;

  a {
    font-size: large;
    text-decoration: none;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
