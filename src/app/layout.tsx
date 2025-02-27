import '~/assets/styles/index.scss';

import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import images from '~/assets/images';
import { cn } from '~/utils';

const font = Jost({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nevel Tech',
  icons: [images.logo],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, interactive-widget=resizes-visual'
        />
      </head>
      <body className={cn('bg-azure-12', font.className)}>{children}</body>
    </html>
  );
}
