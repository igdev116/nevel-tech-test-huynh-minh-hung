import React from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';

const providers = [
  {
    name: 'Evolution',
    logo: images.provider1,
    count: 312,
  },
  {
    name: 'Spribe',
    logo: images.provider2,
    count: 12,
  },
  {
    name: 'VeliPlay',
    logo: images.provider3,
    count: 9,
  },
  {
    name: 'Turbo Games',
    logo: images.provider4,
    count: 36,
  },
  {
    name: 'SmartSoft',
    logo: images.provider5,
    count: 37,
  },
  {
    name: '100HP Gaming',
    logo: images.provider6,
    count: 7,
  },
  {
    name: 'BGaming',
    logo: images.provider7,
    count: 166,
  },
  {
    name: 'Wazdan',
    logo: images.provider8,
    count: 199,
  },
];

const Providers = () => {
  return (
    <section className='mt-[26px] lg:mt-10'>
      <div className='container flex items-center'>
        <h2 className='t-medium-upper lg:t-medium-title text-white'>
          <span className='hidden lg:inline'>All providers</span>
          <span className='lg:hidden'>ALL PROVIDERS</span>
        </h2>
        <div className='flex items-center ml-auto'>
          <div className='hidden lg:block t-link-upper text-white'>SEE ALL</div>
          <Image src={images.icMenu} className='size-[18px] object-contain ml-2' />
        </div>
      </div>

      <div className='container flex gap-[6px] lg:gap-4 mt-3 lg:mt-8 lg:px-[54px] overflow-x-auto scrollbar-none'>
        {providers.map((game, index) => (
          <div key={index} className='min-w-[122px] lg:min-w-0 flex-1 rounded-lg overflow-hidden'>
            <div className='pt-4 pb-4 lg:pb-[22px] bg-azure-18'>
              <Image src={game.logo} className='mx-auto w-[90px] h-[30px] object-contain' />
            </div>
            <div className='text-center py-[10px] bg-grey-98/5'>
              <div className='text-[13px] leading-[18.2px] underline text-white'>{game.name}</div>
              <div className='text-[11px] leading-[11px] underline mt-1 text-[#90A2BD]'>
                {game.count} games
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Providers;
