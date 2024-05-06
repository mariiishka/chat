import {type Metadata} from 'next';

import AuthCard from '@/sections/auth/auth-card';
import AuthSection from '@/sections/auth/auth-section';

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function AuthenticationPage() {
  return (
    <AuthSection
      authCard={
        <AuthCard
          form={<>Auth form</>}
          title="Sign In"
          subtitle="Use your email and password to sign in"
        />
      }
    />
  );
}
