import {useMutation} from '@tanstack/react-query';
import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';

export function useCredentialsSignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const emailSignInMutation = useMutation({
    mutationFn: ({email, password}: {email: string; password: string}) =>
      signIn('credentials', {
        email,
        password,
        callbackUrl: callbackUrl ?? undefined
      })
  });

  return {
    isPending: emailSignInMutation.isPending,
    signIn: emailSignInMutation.mutate
  };
}
