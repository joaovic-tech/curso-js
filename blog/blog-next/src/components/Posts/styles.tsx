import styled from 'styled-components';

export const PostsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding-inline: 2rem;
`;

export const PostStyles = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid whitesmoke;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0;
`;
