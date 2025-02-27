'use client';

import Link from 'next/link';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Button } from '~/components/ui/button';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Game', href: '#' },
  { label: 'Infor', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Promotions', href: '#' },
  { label: 'VIP', href: '#' },
];

const Header = () => {
  return (
    <header className='container flex items-center py-[17px]'>
      <Image src={images.logo} className='w-[109px] h-auto' />
      <div className='hidden lg:flex items-center gap-8 ml-[57px]'>
        <Image src={images.icSearch} className='size-[30px]' />
        <div className='flex items-center gap-6 uppercase'>
          {links.map((link) => (
            <Link href={link.href} key={link.label} className='t-link-upper text-azure-84'>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='h-[34px] flex gap-1 lg:gap-2 ml-auto t-button-upper lg:t-regular-upper'>
        <Button variant='grey' className='px-3 h-full'>
          LOGIN
        </Button>
        <Button variant='green' className='px-3 h-full'>
          REGISTRATION
        </Button>
      </div>
    </header>
  );
};

export default Header;
