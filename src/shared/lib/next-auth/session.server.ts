'use server';

import {getServerSession} from 'next-auth';

import {nextAuthConfig} from '@/shared/lib/next-auth/next-auth.config';

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
export const getAppSessionStrictServer = async () => {
  const session = await getAppSessionServer();
  if (session === null) {
    throw new Error('NeedAuthError');
  }
  return session;
};
