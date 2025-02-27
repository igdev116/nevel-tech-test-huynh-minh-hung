'use client';

import Features from './_components/Features';
import Footer from './_components/Footer';
import Games from './_components/Games';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Providers from './_components/Providers';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Game', href: '#' },
  { label: 'Infor', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Promotions', href: '#' },
  { label: 'VIP', href: '#' },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Games />
        <Providers />
      </main>

      <Footer />
    </>
  );
}
