import Link from 'next/link';
import { Content } from './styles';
import { SITE_NAME } from '@/config/app-config';

export default function Header() {
  return (
    <Content>
      <Link href="/">
        <span>{SITE_NAME}</span>
      </Link>
    </Content>
  );
}
