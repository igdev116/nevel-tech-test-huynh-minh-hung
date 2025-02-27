import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion';
import Link from 'next/link';
import React from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Button } from '~/components/ui/button';

const cols = [
  {
    title: 'Games',
    children: [
      {
        label: 'Game 1',
      },
      {
        label: 'Game 2',
      },
      {
        label: 'Game 3',
      },
      {
        label: 'Game 4',
      },
    ],
  },
  {
    title: 'About',
    children: [
      {
        label: 'About Us',
      },
      {
        label: 'Promotions',
      },
      {
        label: 'VIP',
      },
      {
        label: 'Help Center',
      },
      {
        label: 'Awards & Certificates',
      },
      {
        label: 'App',
      },
    ],
  },
  {
    title: 'Legal Information',
    children: [
      {
        label: 'General Terms & Conditions',
      },
      {
        label: 'Responsible Gaming Policy',
      },
      {
        label: 'Sports Betting Rules',
      },
      {
        label: 'Privacy and Cookies Policy',
      },
      {
        label: 'Payment Methods',
      },
      {
        label: 'Limits',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='py-10 lg:py-[60px] mt-6 lg:mt-10 bg-azure-18'>
      {/* Mobile */}
      <div className='container block lg:hidden'>
        <Accordion type='single' collapsible className='space-y-4'>
          {cols.map((col) => (
            <AccordionItem key={col.title} value={col.title}>
              <AccordionTrigger>{col.title}</AccordionTrigger>
              <AccordionContent>
                <div className='mt-5 space-y-5'>
                  {col.children.map((child) => (
                    <Link href='#' key={child.label} className='block text-[#90A2BD]'>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='t-medium text-white text-center mt-9'>Follow Us</div>
        <div className='flex-between gap-6 px-[49px] mt-[22px]'>
          <Image src={images.icTele} className='size-[35px] object-contain' />
          <Image src={images.icFb} className='size-[35px] object-contain' />
          <Image src={images.icInsta} className='size-[35px] object-contain' />
          <Image src={images.icTwitter} className='size-[35px] object-contain' />
        </div>

        <div className='flex flex-col gap-4 mt-20'>
          <div className='flex-between rounded-lg py-[18px] px-6 bg-[#1A3157]'>
            <div>
              <div className='t-medium text-white'>Help Center</div>
              <div className='text-[13px] leading-[18.2px] text-[#90A2BD]'>
                If you have any questions?
              </div>
            </div>
            <Button className='h-[34px] px-3 t-button-upper' variant='purple'>
              GET ANSWERS
            </Button>
          </div>
          <div className='flex gap-2'>
            <div className='flex-center gap-1 h-[54px] flex-1 rounded-lg bg-[#1A3157]'>
              <Image src={images.icAndroid} className='size-[42px]' />
              <div>
                <div className='t-medium text-white'>Bluechip App</div>
                <div className='text-[12px] leading-[16.9px] text-[#90A2BD]'>for Android</div>
              </div>
            </div>
            <div className='flex-center gap-1 h-[54px] flex-1 rounded-lg bg-[#1A3157]'>
              <Image src={images.icApple} className='size-[42px]' />
              <div>
                <div className='t-medium text-white'>Bluechip App</div>
                <div className='text-[12px] leading-[16.9px] text-[#90A2BD]'>for IOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className='container hidden lg:flex gap-[158px]'>
        <div>
          <div className='t-h3 text-white'>Help Center</div>
          <div className='mt-2 text-[#90A2BD]'>If you have any questions?</div>
          <Button className='h-10 px-[54px] mt-4' variant='purple'>
            GET ANSWERS
          </Button>

          <div className='flex items-center gap-6 mt-10'>
            <Image src={images.icTele} className='size-[30px] object-contain' />
            <Image src={images.icFb} className='size-[30px] object-contain' />
            <Image src={images.icInsta} className='size-[30px] object-contain' />
            <Image src={images.icTwitter} className='size-[30px] object-contain' />
          </div>
        </div>

        <div className='flex gap-[158px]'>
          {cols.map((col) => (
            <div key={col.title}>
              <div className='t-medium text-white'>{col.title}</div>
              <div className='mt-5 space-y-5'>
                {col.children.map((child) => (
                  <Link href='#' key={child.label} className='block text-[#90A2BD]'>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center rounded-lg py-[6px] pl-[10px] pr-[18px] bg-[#1A3157]'>
            <Image src={images.icApple} className='size-[42px]' />
            <span className='font-semibold text-lg text-white'>
              Bluechip App
              <br /> for Mac OS
            </span>
          </div>
          <div className='flex gap-2'>
            <div className='flex-1 rounded-lg px-3 bg-[#1A3157]'>
              <Image src={images.icAndroid} className='size-[42px] mx-auto' />
              <div className='t-regular text-center text-[#90A2BD]'>Android</div>
            </div>
            <div className='flex-1 rounded-lg px-3 bg-[#1A3157]'>
              <Image src={images.icApple} className='size-[42px] mx-auto' />
              <div className='t-regular text-center text-[#90A2BD]'>iOS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
