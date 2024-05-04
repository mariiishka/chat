import type {NextAuthOptions} from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';

import prisma from '@/lib/db';
import {privateConfig} from '@/lib/config/private';

export const nextAuthConfig: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    GitHubProvider({
      clientId: privateConfig.GITHUB_ID,
      clientSecret: privateConfig.GITHUB_SECRET
    })
  ],
  adapter: PrismaAdapter(prisma)
};
