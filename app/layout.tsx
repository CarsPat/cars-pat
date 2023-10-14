import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext';
import './globals.css';
import { StrictMode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'; // Importez localFont

import PreHeader from '@/components/PreHeader/PreHeader';
import Header from '@/components/Header/Header';
import Footer from '@/components/sections/Footer/Footer';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  display: 'swap',
});
const local = localFont({
  src: './fonts/birdsOfParadise.ttf',
  variable: '--local-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cars Pat',
  description:
    "Découvrez Cars Pat, votre carrosserie-peinture de confiance à Marseille Mazargues 13009. Une entreprise familiale dédiée à redonner éclat et sécurité à votre véhicule. Prenez rendez-vous dès aujourd'hui !",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StrictMode>
      <html
        lang='fr'
        suppressHydrationWarning={true}
        className={`${inter.variable} ${local.variable}`}>
        <body>
          <ActiveLinkProvider>
            <PreHeader />
            <Header />
            {children}
            <Footer />
          </ActiveLinkProvider>
        </body>
      </html>
    </StrictMode>
  );
}
