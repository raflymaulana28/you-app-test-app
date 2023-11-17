/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import calculateZodiac from '@/lib/calculateZodiac';

import NextImage from '@/components/NextImage';
import Select from '@/components/Select';
import TextInput from '@/components/TextInput';

import AddImage from '~/svg/add-image.svg';
interface PropsAbout {
  value: any;
  onChange: (e: any) => void;
}
function AboutForm(props: PropsAbout) {
  const { value, onChange } = props;
  const [image, setImage] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader() as any;
      reader.onload = () => {
        setImage(reader?.result);
        onChange({
          target: {
            name: 'image',
            value: reader?.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='mb-2 flex items-center'>
        <label htmlFor='image'>
          {image ? (
            <NextImage
              className='rounded-[17px]'
              src={image}
              alt='uploaded'
              width={56}
              height={56}
            />
          ) : (
            <AddImage className='w-[56px] cursor-pointer' />
          )}
        </label>
        <p className='ml-4 text-[12px] font-medium not-italic leading-[normal] text-[#FFF]'>
          Add Image
        </p>
      </div>
      <input
        type='file'
        accept='image/*'
        id='image'
        name='image'
        onChange={handleImageChange}
        className='invisible relative -z-[10] -mt-[64px]'
      />
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Display Name:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='text'
            name='name'
            value={value?.name}
            onChange={onChange}
            placeholder='Enter name'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Gender:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <Select
            name='gender'
            placeholder='Select Gender'
            value={value?.gender}
            onChange={onChange}
            options={[
              { name: 'Male', id: 'male' },
              { name: 'Female', id: 'female' },
            ]}
            className='p-2 text-[13px]'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Birthday:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='date'
            name='birthday'
            value={value?.birthday}
            onChange={onChange}
            placeholder='Enter birthday date'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Horoscope:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='text'
            name='horoscope'
            disabled
            value={value?.birthday ? calculateZodiac(value?.birthday) : '-'}
            placeholder='Enter birthday date'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Zodiac:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='text'
            name='zodiac'
            disabled
            value={
              value?.birthday ? calculateZodiac(value?.birthday, true) : '-'
            }
            placeholder='Enter birthday date'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Height:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='number'
            name='height'
            value={value?.height}
            onChange={onChange}
            placeholder='Enter height in cm'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <p className='w-[35%] text-[13px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.33)]'>
          Weight:{' '}
        </p>
        <div className='ml-2 w-[65%]'>
          <TextInput
            type='number'
            name='weight'
            value={value?.weight}
            onChange={onChange}
            placeholder='Enter weight in kg'
            className='p-2 text-[13px]'
            parentClassName='m-0'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutForm;
