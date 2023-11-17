/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';
import React from 'react';

import calculateAge from '@/lib/calculateAge';
import calculateZodiac from '@/lib/calculateZodiac';
interface AboutProps {
  value: any;
}
function DetailAbout(props: AboutProps) {
  const { value } = props;
  if (!value?.birthday) {
    return (
      <p className='text-[14px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.52)]'>
        Add in your your to help others know you better
      </p>
    );
  }
  return (
    <div>
      <div className='mb-4 flex items-center'>
        <p className='text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Birthday:{' '}
        </p>
        <p className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
          {value?.birthday && moment(value?.birthday).format('DD/MM/YYYY')} (Age{' '}
          {value.birthday && calculateAge(value.birthday)})
        </p>
      </div>
      <div className='mb-4 flex items-center'>
        <p className='text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Horoscope:{' '}
        </p>
        <p className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
          {value?.birthday && calculateZodiac(value?.birthday)}
        </p>
      </div>
      <div className='mb-4 flex items-center'>
        <p className='text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Zodiac:{' '}
        </p>
        <p className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
          {value?.birthday && calculateZodiac(value?.birthday, true)}
        </p>
      </div>
      <div className='mb-4 flex items-center'>
        <p className='text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Height:{' '}
        </p>
        <p className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
          {value?.height} cm
        </p>
      </div>
      <div className='mb-4 flex items-center'>
        <p className='text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Weight:{' '}
        </p>
        <p className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
          {value?.weight} kg
        </p>
      </div>
    </div>
  );
}

export default DetailAbout;
