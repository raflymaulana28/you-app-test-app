import { FormEvent, memo, useState } from 'react';

import { cn } from '@/lib/utils';

import EyeOff from '~/svg/eye-off.svg';
import EyeIcon from '~/svg/eye-on.svg';
interface TextProps extends React.HTMLProps<HTMLInputElement> {
  placeholder?: string;
  name: string;
  type: string;
  errorText?: string;
  className?: string;
  parentClassName?: string;
}
const TextInput = memo(
  ({
    placeholder,
    name,
    type,
    errorText,
    className,
    parentClassName,
    ...rest
  }: TextProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [validationMessage, setValidationMessage] = useState<string>('');

    const onInvalid = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;
      setValidationMessage(target.validationMessage);
    };

    const onBlur = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;

      if (validationMessage) {
        setValidationMessage(target.validationMessage);
      }
    };
    return (
      <div className={cn('mb-4', parentClassName)}>
        <div className='flex w-full items-center'>
          <input
            placeholder={placeholder}
            name={name}
            type={showPassword ? 'text' : type}
            onInvalid={onInvalid}
            onBlur={onBlur}
            {...rest}
            className={cn(
              'w-full rounded-[9px] bg-[rgba(255,_255,_255,_0.06)] p-[18px] text-[13px] font-medium not-italic leading-[normal] text-white focus:bg-[rgba(255,_255,_255,_0.06)]',
              className
            )}
          />
          {type === 'password' ? (
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className='-ml-8 cursor-pointer'
            >
              {showPassword ? (
                <EyeOff className='w-4' />
              ) : (
                <EyeIcon className='w-4' />
              )}
            </div>
          ) : null}
        </div>
        {!!validationMessage && (
          <div className=' mt-2 text-[13px] text-[red]'>
            {errorText || validationMessage}
          </div>
        )}
      </div>
    );
  }
);

export default TextInput;
