/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react';

import calculateZodiac from '@/lib/calculateZodiac';

import NextImage from '@/components/NextImage';

interface HeaderProps {
  value: any;
}
function HeaderAbout(props: HeaderProps) {
  const { value } = props;
  return (
    <Fragment>
      <NextImage
        src={value?.image ?? 'https://via.placeholder.com/325x230'}
        alt='img-cover'
        height={190}
        width={500}
        className='h-[190px] max-w-full'
        classNames={{ image: 'm-w-full h-[190px] w-full rounded-[16px]' }}
      />
      <div className='relative z-[10] -mt-[190px] flex h-[190px] w-full flex-col justify-end rounded-[16px] bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.76)_0%,_rgba(0,_0,_0,_0.00)_45.83%,_#000_100%)] p-[14px]'>
        <p className='text-[16px] font-bold not-italic leading-[normal] tracking-[-0.233px] text-[#FFF]'>
          @{value?.username}
        </p>
        <p className='text-[13px] font-medium not-italic leading-[normal] tracking-[-0.233px] text-[#FFF]'>
          {value?.gender}
        </p>
        {value?.birthday && (
          <div className='mt-5 flex items-center'>
            <div className='mr-4 flex items-center rounded-[100px] bg-[rgba(255,_255,_255,_0.06)] px-4 py-2 backdrop-blur-[25px] backdrop-filter'>
              <p className='text-center text-[14px] font-semibold not-italic leading-[normal] text-[#FFF]'>
                {calculateZodiac(value?.birthday)}
              </p>
            </div>
            <div className='mr-4 flex items-center rounded-[100px] bg-[rgba(255,_255,_255,_0.06)] px-4 py-2 backdrop-blur-[25px] backdrop-filter'>
              <p className='text-center text-[14px] font-semibold not-italic leading-[normal] text-[#FFF]'>
                {calculateZodiac(value?.birthday, true)}
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default HeaderAbout;
