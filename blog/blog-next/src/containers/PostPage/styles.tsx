import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
    height: large;
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 10rem;
`;

export const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  background-color: #f5f5f5e1;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-0.2rem);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  text-align: left;
  color: #666;
  font-weight: bold;
`;

export const Span = styled.span`
  margin-bottom: 1rem;
  color: violet;
`;
