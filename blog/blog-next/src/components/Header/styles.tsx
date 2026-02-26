import styled from 'styled-components';

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 12rem;

  @media (max-width: 900px) {
    padding: 1rem 4rem;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.textBlack};
    font-weight: 700;
    letter-spacing: -0.02em;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;
