'use client';

import {type FC} from 'react';
import Link from 'next/link';

import {cn} from '@/lib/utils';
import {usePathname} from 'next/navigation';

type NavManuItemProps = {
  title: string;
  icon?: string;
  href: string;
};

const NavManuItem: FC<NavManuItemProps> = ({title, icon, href}) => {
  const pathname = usePathname();
  const isCurrent = `/${pathname.split('/')[1].split('?')[0]}` === `${href}`;

  const isActive = isCurrent;

  return (
    <li className="relative px-3">
      <Link
        href={href}
        className={cn(
          'block',
          !isActive && '[&+div]:hover:h-6 [&+div]:hover:left-0'
        )}
      >
        <div
          className={cn(
            'transition-[border-radius, background] duration-200 rounded-[50%] hover:bg-purple-400 hover:rounded-[30%] h-11 w-11 bg-slate-700 cursor-pointer',
            isActive && 'rounded-[30%] bg-purple-400'
          )}
        />
      </Link>
      <div
        className={cn(
          'transition-[left, height] duration-300 h-2 absolute w-[4px] top-[50%] translate-y-[-50%] rounded-tr-[10px] rounded-br-[10px] left-[-100%] bg-slate-100',
          isActive && 'left-0 h-10'
        )}
      />
    </li>
  );
};

export default NavManuItem;
