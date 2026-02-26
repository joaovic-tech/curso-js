import styled from 'styled-components';

// HeaderHome, HeaderHomeLeft, HeaderHomeRight

export const HeaderHome = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HeaderHomeLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex: 1;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textHeading};
    letter-spacing: -0.02em;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const HeaderHomeRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1.5rem;
  flex: 1;
  justify-content: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textHeading};
    letter-spacing: -0.01em;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.8rem;
    list-style: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    width: 44px;
    height: 44px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    color: ${({ theme }) => theme.colors.textWhite};

    &:hover {
      opacity: 0.8;
    }
  }

  .link-github {
    background: ${({ theme }) => theme.colors.social.github};
  }

  .link-linkedin {
    background: ${({ theme }) => theme.colors.social.linkedin};
  }

  .link-x {
    background: ${({ theme }) => theme.colors.social.x};
  }

  .link-instagram {
    background: ${({ theme }) => theme.colors.social.instagram};
  }
`;
