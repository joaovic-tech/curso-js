import styled from 'styled-components';

export const PostsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

export const PostStyles = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    display: block;
    border-radius: 10%;
    border: 0.3rem solid #d4c79f;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 10%;
  }
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  padding-left: 1rem;
  margin: 1rem 0;
`;
