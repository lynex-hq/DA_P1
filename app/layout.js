import { Bodoni_Moda, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata = {
  title: 'DESIGN ARK // Atelier & Architectural Rigor',
  description:
    'Design Ark is an interior design studio crafting inspiring, timeless spaces across residential, office and commercial disciplines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Icon font — used for the drawer glyph and the service-card icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] text-slate selection:bg-[#C5A880] selection:text-white antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
