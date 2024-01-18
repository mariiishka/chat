import {type FC} from 'react';

import NavManuItem from '@/components/nav-menu/nav-menu-item';

const NavMenu: FC = () => {
  return (
    <nav className="py-2 bg-slate-950">
      <ul className="flex flex-col gap-3">
        <NavManuItem href="/" title="me" />
        <NavManuItem href="/weather" title="me" />
      </ul>
    </nav>
  );
};

export default NavMenu;
