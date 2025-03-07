import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Onstep',
  description:
    '취업 준비를 더 체계적으로! 일정 관리, 지원 현황 추적, 목표 설정까지 한 곳에서 쉽게 정리하세요.',
  keywords: ['취업 준비', '지원 현황', '일정 관리', '이력서 작성', '자기소개서', '취업 목표'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://on-step-next.vercel.app/',
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <main className="container py-10 ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
