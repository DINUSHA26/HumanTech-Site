import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HumanTec.lk — Smart Tech. Instant Care.',
  description: 'Total Peace of Mind for Your Loved Ones. Give your parents the independent life they want and the round-the-clock safety they deserve.',
  keywords: ['healthcare', 'health monitoring', 'elderly care', 'smart devices', 'doctor consults', 'SOS alerts'],
  openGraph: {
    title: 'HumanTec.lk — Smart Tech. Instant Care.',
    description: 'Total Peace of Mind for Your Loved Ones. Give your parents the independent life they want and the round-the-clock safety they deserve.',
    type: 'website',
    locale: 'en_LK',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

