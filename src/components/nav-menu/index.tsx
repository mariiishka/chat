'use client';

import {type FC} from 'react';
import {signOut} from 'next-auth/react';

import NavManuItem from '@/components/nav-menu/nav-menu-item';
import {Button} from '../../shared/ui/button';

const NavMenu: FC = () => {
  return (
    <nav className="py-[6px] bg-gray-900">
      <ul className="flex flex-col gap-2">
        <NavManuItem href="/" title="me" />
      </ul>

      <Button onClick={() => signOut()}>Sign out</Button>
    </nav>
  );
};

export default NavMenu;
