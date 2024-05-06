import {useSearchParams} from 'next/navigation';
import {type ClientSafeProvider, signIn} from 'next-auth/react';
import {useMutation} from '@tanstack/react-query';

export function useOAuthSignIn(provider: ClientSafeProvider) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const oauthSignInMutation = useMutation({
    mutationFn: () =>
      signIn(provider.id, {
        callbackUrl: callbackUrl ?? '/'
      })
  });

  return {
    isPending: oauthSignInMutation.isPending,
    signIn: oauthSignInMutation.mutate
  };
}
