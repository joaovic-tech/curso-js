import styled from 'styled-components';

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 12rem;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #000;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
