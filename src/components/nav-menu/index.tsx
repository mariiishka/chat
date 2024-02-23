import {type FC} from 'react';

import NavManuItem from '@/components/nav-menu/nav-menu-item';

const NavMenu: FC = () => {
  return (
    <nav className="py-[6px] bg-gray-900">
      <ul className="flex flex-col gap-2">
        <NavManuItem href="/" title="me" />
        <NavManuItem href="/weather" title="me" />
      </ul>
    </nav>
  );
};

export default NavMenu;
