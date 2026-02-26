import { LoadingContainer, LoadingDots, LoadingText } from './styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingDots>
        <span />
        <span />
        <span />
      </LoadingDots>
      <LoadingText>Carregando posts...</LoadingText>
    </LoadingContainer>
  );
}
