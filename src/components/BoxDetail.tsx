import { cn } from '@/lib/utils';

import Pen from '~/svg/pen.svg';
type BoxProps = {
  title: string;
  onEdit?: () => void;
  children: React.ReactNode;
  className?: string;
  customRightElement?: React.ReactNode;
};
function BoxDetail(props: BoxProps) {
  const { title, onEdit, children, className, customRightElement } = props;
  return (
    <div
      className={cn(
        'rounded-[14px] bg-[var(--Card-info-dark,_#0E191F)] px-[12px] py-[8px]',
        className
      )}
    >
      <div className='flex justify-between'>
        <p className='text-[14px] font-bold not-italic leading-[normal] text-[#FFF]'>
          {title}
        </p>
        {customRightElement ?? (
          <Pen onClick={onEdit} className='w-4 cursor-pointer' />
        )}
      </div>
      <div className='mt-6'>{children}</div>
    </div>
  );
}

export default BoxDetail;
