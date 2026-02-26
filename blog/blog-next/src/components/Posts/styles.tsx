import styled from 'styled-components';

export const PostsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const PostStyles = styled.li`
  list-style: none;
  height: 100%;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    overflow: hidden;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  img {
    width: 100%;
    height: 11rem;
    object-fit: cover;
  }
`;

export const PostTitle = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
