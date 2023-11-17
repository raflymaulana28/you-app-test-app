/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { cn } from '@/lib/utils';
type SelectProps = {
  options: Array<any>;
  className?: string;
  name: string;
  placeholder: string;
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
};
function Select(props: SelectProps) {
  const { options, name, placeholder, className, ...rest } = props;
  return (
    <div>
      <select
        {...rest}
        name={name}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-[9px] bg-[rgba(255,_255,_255,_0.06)] p-[18px] text-[13px] font-medium not-italic leading-[normal] text-white focus:bg-[rgba(255,_255,_255,_0.06)]',
          className
        )}
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
