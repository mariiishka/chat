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
      <p className="text-[14px] text-gray-900 font-semibold">{pageNum}</p>
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
                ? 'border-[2px] border-pink-400'
                : 'border-gray-300 hover:border-pink-300'
            )}
            alt={`page-${pageNum}`}
          />
        )}
      </div>
    </div>
  );
};
