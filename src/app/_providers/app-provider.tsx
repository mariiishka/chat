'use client';

import {type FC, type PropsWithChildren} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import {TooltipProvider} from '@/components/ui/tooltip';
import {ComposeChildren} from '@/lib/react';
import {AppSessionProvider} from '@/lib/next-auth/client';
import {queryClient} from '@/lib/api/query-client';

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
