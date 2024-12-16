import ReactQueryProvider from '@/components/common/ReactQueryProvider';
import ThemeProviderWrapper from '@/components/common/ThemeProviderWrapper';
import GlobalStyle from '@/styles/global';
import Script from 'next/script';

const baseURL = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://localhost:3000';

export const metadata = {
  title: 'mema',
  description: '모임을 더 쉽게 meet mate, mema',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/puzzleWithBoxLogo.png',
  },
  openGraph: {
    title: 'mema',
    description: '모임을 더 쉽게 meet mate, mema',
    images: [
      {
        url: `${baseURL}/images/puzzleLogo.png`,
        width: 800,
        height: 600,
        alt: 'Logo image',
      },
    ],
    url: 'https://meet-mate-mema.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mema',
    description: '모임을 더 쉽게 meet mate, mema',
    images: [`${baseURL}/images/puzzleWithBoxLogo.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_MAP_KEY}`}
      ></Script>
      <body>
        <ReactQueryProvider>
          <ThemeProviderWrapper>
            <GlobalStyle />
            {children}
          </ThemeProviderWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
