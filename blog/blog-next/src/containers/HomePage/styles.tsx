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
  justify-content: left;
  align-items: left;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  img {
    border-radius: 10%;
    border: 0.5rem solid #d4c79f;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #63542a;
  }

  p {
    font-size: 1rem;
    color: #63542a;
    font-weight: bold;
  }
`;

export const HeaderHomeRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 2rem;
  flex: 1;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #63542a;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: right;
    gap: 1rem;
    list-style: none;
  }

  a {
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    font-weight: bold;
    padding: 0.6rem;
    border-radius: 100%;
    transition: all 0.3s ease-in-out;
    color: white;

    &:hover {
      transform: translateY(-0.5rem);
    }
  }

  .link-github {
    background: #4a4a4a;
  }

  .link-linkedin {
    background: #7a9eb1;
  }

  .link-x {
    background: #333333;
  }

  .link-instagram {
    background: #c18c8c;
  }
`;
