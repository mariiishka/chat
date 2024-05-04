import {type FC, type PropsWithChildren} from 'react';

import {TooltipProvider} from '@/components/ui/tooltip';
import {ComposeChildren} from '@/lib/react';
import {AppSessionProvider} from '@/lib/next-auth/client';

const AppProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <TooltipProvider />
      {children}
    </ComposeChildren>
  );
};

export default AppProvider;
