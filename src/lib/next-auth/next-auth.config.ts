import type {NextAuthOptions} from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

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
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com'
        },
        password: {label: 'Password', type: 'password', placeholder: '******'}
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
          headers: {'Content-Type': 'application/json'}
        });
        const user = await res.json();
        console.log('providers res ', user);

        if (res.ok && user) {
          return user;
        }

        return null;
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({session, user, token}) {
      if (user !== null) {
        session.user = user;
      }
      return await session;
    }
  }
};
