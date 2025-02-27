import React from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';
import { cn } from '~/utils';

const feats = [
  {
    label: 'Search',
    icon: images.icSearch,
  },
  {
    label: 'Diamond mine',
    icon: images.icFeat1,
  },
  {
    label: 'VIP',
    icon: images.icFeat2,
  },
  {
    label: 'Promotion',
    icon: images.icFeat3,
  },
  {
    label: 'Hot Match',
    icon: images.icFeat4,
  },
  {
    label: 'P2P Transaction',
    icon: images.icFeat5,
  },
  {
    label: 'Games',
    icon: images.icFeat6,
  },
  {
    label: 'Providers',
    icon: images.icFeat7,
  },
];

const Features = () => {
  return (
    <section className='container flex gap-[6px] lg:gap-[10px] mt-6 lg:mt-[80px]'>
      {feats.map((feat, index) => {
        const isActive = index === 0 || index === feats.length - 1 || index === feats.length - 2;

        return (
          <div
            key={feat.label}
            className={cn(
              'flex items-center justify-center flex-1 gap-[7px] lg:gap-[13px] h-[50px] lg:h-[57px] rounded-[10px] border border-white/10',
              isActive && 'bg-azure-18',
              index === 0 && 'flex lg:hidden',
              !isActive && 'hidden lg:flex',
            )}
          >
            <Image src={feat.icon} className='size-6 object-contain' />
            <span className='t-link text-white'>{feat.label}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
