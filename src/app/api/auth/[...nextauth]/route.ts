import NextAuth from 'next-auth/next';
import {nextAuthConfig} from '@/lib/next-auth/next-auth.config';

const authHandler = NextAuth(nextAuthConfig);

export {authHandler as GET, authHandler as POST};
