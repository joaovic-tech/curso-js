import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  gap: 2rem;
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 1.4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const LoadingText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.textPrimary} 25%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.textPrimary} 75%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 2s linear infinite;
`;
