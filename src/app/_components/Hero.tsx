import React, { useState } from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Button } from '~/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '~/utils';
import { Breakpoint } from '~/constants';

const SLIDE_COUNT = 5;

const Hero = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <section className='px-4 lg:px-0 lg:mt-[55px]'>
      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          [Breakpoint.None]: {
            slidesPerView: 1,
          },
          [Breakpoint.LG]: {
            slidesPerView: 1.4,
          },
        }}
        spaceBetween={40}
        centeredSlides
        onActiveIndexChange={(swiper) => setCurrentPhotoIndex(swiper.activeIndex)}
      >
        {Array(SLIDE_COUNT)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide key={index} className='relative pt-10 lg:pt-0'>
              <div
                className={cn(
                  'absolute inset-0 flex flex-col lg:flex-row rounded-3xl px-[50px] lg:pl-[94.5px] pb-[16.7px] lg:pb-0 pt-[168px] lg:pt-0 transition-all ease-out duration-500',
                  index !== currentPhotoIndex && 'opacity-30',
                )}
              >
                <div className='flex flex-col items-center pt-10'>
                  <div className='flex-center rounded-[79px] text-[12px] leading-[16.8px] lg:t-semibold px-[42.5px] lg:px-4 h-[25px] lg:h-[41px] text-white bg-white/10'>
                    <span className='hidden lg:inline'>Exclusive Tournament</span>
                    <span className='lg:hidden'>CashBack</span>
                  </div>
                  <h1 className='t-h3 lg:t-h1 text-center mt-3 lg:mt-[15px] text-white'>
                    Piggy Christmas Tap:
                    <br /> €35,000 For Your
                    <br className='hidden lg:block' /> Wins
                  </h1>
                  <Button
                    className='mt-3 lg:mt-[14px] px-[88px] w-full h-[50px] text-[15px] leading-[15px] lg:t-semibold'
                    variant='red'
                  >
                    JOIN AND WIN
                  </Button>
                </div>
                <Image
                  src={images.hero1}
                  className='absolute lg:static left-0 right-0 -top-8 w-full lg:w-auto h-56 lg:h-auto object-contain'
                />
                <Image
                  src={images.icInfo}
                  className='absolute top-2 lg:top-[21.45px] right-[15px] lg:right-[30px] size-6'
                />
              </div>
              <Image src={images.bgHeroDesktop} className='hidden lg:block w-full h-auto' />
              <Image src={images.bgHeroMobile} className='lg:hidden w-full h-auto' />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className='flex lg:hidden items-center justify-center gap-[6px] mt-3'>
        {Array(SLIDE_COUNT)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                'size-[6px] rounded-full',
                currentPhotoIndex === index ? 'bg-white' : 'bg-white/40',
              )}
            />
          ))}
      </div>
    </section>
  );
};

export default Hero;
