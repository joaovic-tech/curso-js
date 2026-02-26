import Link from 'next/link';
import { HeaderMain, ThemeToggle } from './styles';
import { SITE_NAME } from '@/config/app-config';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderMain>
      <Link href="/">
        <span>{SITE_NAME}</span>
      </Link>
      <div>
        <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </ThemeToggle>
        <Image src="https://avatars.githubusercontent.com/u/79641024?v=4" alt="João Victor" width={32} height={32} />
      </div>
    </HeaderMain>
  );
}
