/* eslint-disable @next/next/no-script-component-in-head */
import FooterSection from '@/components/footer/footer-section';
import NavbarSection from '@/components/navbar/navbar-section';
import theme from '@/theme/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import Head from 'next/head';
// import Script from 'next/script';
import './globals.css';

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'thai'],
});

export const metadata: Metadata = {
  title: 'GET PRINT & PRESS บริการพิมพ์สื่อส่งเสริมการขายครบวงจร ทั้งออกแบบ ผลิตและจัดส่ง.',
  description: 'โรงพิมพ์สื่อส่งเสริมการขาย บริการงานพิมพ์ที่ครบวงจรทั้งป้ายตั้งพื้น ป้ายตั้งโต๊ะ ป้าบ Roll Up ป้าย X-Stand ป้าย Backdrop',
  icons: {
    icon: '/images/logo-blue.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo-blue.webp" />

        {/* <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8CJP9T3');`
        }} /> */}
      </Head>
      <body className={kanit.className}>
        {/* <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8CJP9T3"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript> */}

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AntdRegistry>
              <NavbarSection />
              {children}
              <FooterSection />
            </AntdRegistry>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleTagManager gtmId="GTM-T8CJP9T3" />
    </html>
  );
}
