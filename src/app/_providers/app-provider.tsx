'use client';

import {type FC, type PropsWithChildren} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import {TooltipProvider} from '@/shared/ui/tooltip';
import {ComposeChildren} from '@/shared/lib/react';
import {AppSessionProvider} from '@/shared/lib/next-auth/client';
import {queryClient} from '@/shared/api/query-client';

const AppProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <TooltipProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
};

export default AppProvider;
