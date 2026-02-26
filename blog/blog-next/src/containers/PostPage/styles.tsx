import styled from 'styled-components';

export const SectionTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const Paragraph = styled.p`
  font-size: 0.85rem;
  margin: 1rem 0 2rem 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;
