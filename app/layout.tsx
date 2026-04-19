import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contrails & Cordite — A Dossier of WWII Aircraft',
  description:
    'An enthusiast\'s field guide to the fighters, bombers, and dive bombers of the Second World War — Allied and Axis, every theatre.',
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
