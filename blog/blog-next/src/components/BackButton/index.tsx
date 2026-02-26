import { useRouter } from 'next/router';
import { Button } from './styles';

export default function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.back()}>&lt; Voltar</Button>;
}
