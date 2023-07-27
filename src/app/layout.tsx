import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import fonts from '@/styles/fonts';

const inter = Inter({ subsets: ['latin'] });

const SEO = {
  title: 'Edgar Avecilla',
  description:
    'Edgar Avecilla is a awesome software developer who specializes in creating new digital experiences.',
  image: '/og.png',
  url: 'https://www.edgaravecilla.com',
  twitter: '@avecilla_edgar',
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  creator: SEO.title,
  keywords: [
    'Next',
    'nextjs',
    'typescript',
    'Edgar',
    'Avecilla',
    'developer',
    'software',
    'engineer',
    'Queretaro',
    'Mexico',
    'backend',
    'mobile',
    'frontend',
  ],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    images: [SEO.image],
    url: SEO.url,
    type: 'website',
    countryName: 'Mexico',
    siteName: 'Edgar Avecilla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    creator: SEO.twitter,
    title: SEO.title,
    description: SEO.description,
    site: SEO.url,
    images: SEO.image,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fonts}>{children}</body>
    </html>
  );
}
