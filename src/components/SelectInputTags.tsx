/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import CloseWhite from '~/svg/close-white.svg';
type PropsTags = {
  selectedTags: Array<string>;
  tagInput: string;
  onChangeText: (e: any) => void;
  handleAddTag: () => void;
  removeTags: (i: string) => void;
};

function SelectInputTags(props: PropsTags) {
  const { selectedTags, handleAddTag, tagInput, onChangeText, removeTags } =
    props;

  return (
    <div className='flex w-full flex-wrap gap-1 rounded-[9px] bg-[rgba(255,_255,_255,_0.06)] px-4 py-2 text-[13px] font-medium not-italic leading-[normal] text-white focus:bg-[rgba(255,_255,_255,_0.06)]'>
      {selectedTags.map((i) => (
        <div
          className='flex items-center rounded-[4px] bg-[rgba(255,_255,_255,_0.10)] p-2'
          key={i}
        >
          <p className='text-[12px] font-semibold not-italic leading-[normal] text-[#FFF]'>
            {i}
          </p>
          <CloseWhite onClick={() => removeTags(i)} className='w-4' />
        </div>
      ))}
      <input
        type='text'
        onChange={onChangeText}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTag();
          }
        }}
        style={{ width: tagInput.length > 1 ? tagInput.length * 12 : '100%' }}
        placeholder="Input your interest and press 'Enter'"
        value={tagInput}
        className='w-auto border-none bg-transparent p-0 text-[12px] text-[#fff]  outline-none focus:border-none focus:outline-none'
      />
    </div>
  );
}

export default SelectInputTags;
