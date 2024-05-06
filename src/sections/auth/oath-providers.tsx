'use server';

import {getProviders} from 'next-auth/react';
import {type FC} from 'react';
import ProviderButton from './provider-button';

const OAuthProviders: FC = async () => {
  const providers = await getProviders();
  const oauthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === 'oauth'
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      {oauthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default OAuthProviders;
