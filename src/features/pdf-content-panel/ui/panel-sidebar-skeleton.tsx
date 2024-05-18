import {Skeleton} from '@/shared/ui/skeleton';

export const PanelSidebarSkeleton = () => {
  return Array.from({length: 3}).map((_, index) => (
    <div key={index} className="flex gap-[14px]">
      <p className="text-[14px] font-semibold">{index + 1}</p>
      <div className="relative flex h-[168px] w-[132px] cursor-pointer items-center justify-center">
        <Skeleton className="h-full w-full rounded-[6px] border border-solid border-gray-400" />
      </div>
    </div>
  ));
};
