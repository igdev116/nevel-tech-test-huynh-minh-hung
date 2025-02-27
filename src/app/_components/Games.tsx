import React from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';

const games = [
  {
    name: '100HP Gaming',
    photo: images.game1,
    type: 'hot',
  },
  {
    name: 'VeliPlay',
    photo: images.game2,
    type: 'new',
  },
  {
    name: 'Evolution',
    photo: images.game3,
    type: 'new',
  },
  {
    name: 'Onlyplay',
    photo: images.game4,
  },
  {
    name: 'VeliPlay',
    photo: images.game5,
    type: 'hot',
  },
  {
    name: '100HP Gaming',
    photo: images.game1,
    type: 'hot',
  },
  {
    name: 'VeliPlay',
    photo: images.game2,
    type: 'hot',
  },
  {
    name: 'Evolution',
    photo: images.game3,
  },
  {
    name: 'Onlyplay',
    photo: images.game4,
    type: 'new',
  },
  {
    name: 'VeliPlay',
    photo: images.game5,
    type: 'hot',
  },
];

const Games = () => {
  return (
    <section className='lg:pt-8 lg:border-t border-white/5 mt-[26px] lg:mt-[30px]'>
      <div className='container flex items-center'>
        <h2 className='t-medium-upper lg:t-medium-title text-white'>
          <span className='hidden lg:inline'>Exclusive Games</span>
          <span className='lg:hidden'>EXCLUSIVE GAMES</span>
        </h2>
        <div className='flex items-center ml-auto'>
          <div className='hidden lg:block t-link-upper text-white'>SEE ALL</div>
          <Image src={images.icMenu} className='size-[18px] object-contain ml-2' />
        </div>
      </div>

      <div className='container relative flex gap-4 mt-3 lg:mt-8 overflow-x-auto scrollbar-none'>
        {games.map((game, index) => (
          <div
            key={index}
            className='relative shrink-0 w-[120px] lg:w-[156px] h-[160px] lg:h-[210px]'
          >
            <Image src={game.photo} className='size-full object-cover rounded-lg' />
            <span className='abs-center-x bottom-[6px] text-[7px] leading-[7px] lg:text-[8px] lg:leading-[8px] text-white'>
              {game.name}
            </span>
            {game.type && (
              <Image
                src={game.type === 'hot' ? images.hot : images.new}
                className='absolute -left-[3px] top-[11px] lg:top-[15px] w-9 h-auto'
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
