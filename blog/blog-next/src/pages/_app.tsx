import { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/global-style';
import { AppThemeProvider } from '@/contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
