import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 12rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 900px) {
    padding: 2rem 4rem;
  }

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
    letter-spacing: 0.01em;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      opacity: 0.7;
    }
  }
`;
