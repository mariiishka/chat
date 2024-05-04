'use client';

import {memo, type FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

import {cn} from '@/lib/utils';
import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip';

type NavManuItemProps = {
  title: string;
  icon?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

const NavManuItem: FC<NavManuItemProps> = ({title, icon, href, onClick}) => {
  const pathname = usePathname();
  const isCurrent = `/${pathname.split('/')[1].split('?')[0]}` === `${href}`;

  const isActive = isCurrent;

  return (
    <Tooltip delayDuration={50}>
      <TooltipTrigger>
        <li className="relative px-3" onClick={onClick}>
          <Link
            href={href}
            className={cn(
              'block',
              !isActive && '[&+div]:hover:h-6 [&+div]:hover:left-0'
            )}
          >
            <div
              className={cn(
                'transition-[border-radius, background] duration-200 rounded-[50%] hover:bg-purple-400 hover:rounded-[30%] h-11 w-11 bg-gray-700 cursor-pointer',
                isActive && 'rounded-[30%] bg-purple-400'
              )}
            >
              {icon?.length && <Image src={icon} alt={`${title}-chat`} fill />}
            </div>
          </Link>
          <div
            className={cn(
              'transition-[left, height] duration-300 h-2 absolute w-[4px] top-[50%] translate-y-[-50%] rounded-tr-[10px] rounded-br-[10px] left-[-100%] bg-slate-100',
              isActive && 'left-0 h-10'
            )}
          />
        </li>
      </TooltipTrigger>
      <TooltipContent side="right" align="center">
        {title}
      </TooltipContent>
    </Tooltip>
  );
};

export default memo(NavManuItem);
