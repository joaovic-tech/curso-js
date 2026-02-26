import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  color: #666;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;
