import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DESCRIPTION =
  "An enthusiast's field guide to the fighters, bombers, and dive bombers of the Second World War — Allied and Axis, every theatre.";

export const metadata: Metadata = {
  title: 'Contrails & Cordite — A Dossier of WWII Aircraft',
  description: DESCRIPTION,
  keywords: [
    'WWII aircraft',
    'World War II warplanes',
    'Spitfire',
    'Mustang',
    'Bf 109',
    'Zero',
    'aviation history',
    'WW2 fighter planes',
  ],
  openGraph: {
    title: 'Contrails & Cordite — A Dossier of WWII Aircraft',
    description: DESCRIPTION,
    type: 'website',
    images: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Supermarine_Spitfire_Mk_Vb_of_92_Sqn_flown_by_Geoffrey_Wellum_1941.jpg?width=1200',
        width: 1200,
        alt: 'Supermarine Spitfire Mk Vb in flight, 1941',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contrails & Cordite — A Dossier of WWII Aircraft',
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
