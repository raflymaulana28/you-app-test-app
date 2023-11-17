import { useRouter } from 'next/navigation';
import React from 'react';

import BackArrow from '~/svg/back-arrow.svg';
type AppBarProps = {
  title?: string;
  right?: React.ReactNode;
};

function AppBar(props: AppBarProps) {
  const { title, right } = props;
  const router = useRouter();
  return (
    <div className='flex items-center justify-between bg-transparent p-4'>
      <button
        onClick={() => {
          router.back();
        }}
        className='flex items-center bg-none outline-none'
      >
        <BackArrow className='mr-2 w-2' />
        <p className='m-0 text-[14px] font-bold not-italic leading-[normal] text-[#FFF]'>
          Back
        </p>
      </button>
      {title && (
        <p className='text-center text-[14px] font-semibold not-italic leading-[normal] text-[#FFF]'>
          {title}
        </p>
      )}
      {right ?? <div className='w-[32px]' />}
    </div>
  );
}

export default AppBar;
