'use client';

import {type FC} from 'react';
import {Github} from 'lucide-react';
import {type ClientSafeProvider} from 'next-auth/react';

import {Button} from '@/components/ui/button';
import {useOAuthSignIn} from '@/hooks/auth/user-oath-sign-in';

type Props = {
  provider: ClientSafeProvider;
};

const ProviderButton: FC<Props> = ({provider}) => {
  const {isPending, signIn} = useOAuthSignIn(provider);

  const getIcon = (proider: ClientSafeProvider) => {
    switch (proider.id) {
      case 'github':
        return <Github className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      disabled={isPending}
      onClick={() => signIn()}
    >
      {isPending ? <>loading...</> : getIcon(provider)}
      {provider.name}
    </Button>
  );
};

export default ProviderButton;
