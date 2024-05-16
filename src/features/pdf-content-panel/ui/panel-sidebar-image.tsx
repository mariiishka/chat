import Image from 'next/image';
import {cn} from '@/shared/ui/utils';

export const PanelSidebarImage = ({
  active,
  pageNum,
  image,
  onClick
}: {
  active: boolean;
  pageNum: number;
  image: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex gap-[14px]">
      <p className="text-[14px] font-semibold">{pageNum}</p>
      <div
        className="relative flex h-[168px] w-[132px] cursor-pointer items-center justify-center"
        onClick={onClick}
      >
        {image && (
          <Image
            src={image}
            fill
            className={cn(
              'rounded-[6px] border border-solid transition-[border] duration-200',
              active
                ? 'border-[2px] border-[#9CA3AF]'
                : 'border-[#D1D5DB] hover:border-[#9CA3AF]'
            )}
            alt={`page-${pageNum}`}
          />
        )}
      </div>
    </div>
  );
};
