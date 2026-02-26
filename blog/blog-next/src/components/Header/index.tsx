import Link from 'next/link';
import { HeaderMain } from './styles';
import { SITE_NAME } from '@/config/app-config';
import Image from 'next/image';

export default function Header() {
  return (
    <HeaderMain>
      <Link href="/">
        <span>{SITE_NAME}</span>
      </Link>
      <Image src="https://avatars.githubusercontent.com/u/79641024?v=4" alt="João Victor" width={32} height={32} />
    </HeaderMain>
  );
}
