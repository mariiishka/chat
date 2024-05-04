import {type Metadata} from 'next';

import AuthCard from '@/sections/auth/auth-card';
import OAuthSignIn from '@/sections/auth/oath-sign-in';

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function AuthenticationPage() {
  return (
    <div className="flex flex-col gap-4">
      <AuthCard
        form={<>Auth form</>}
        title="Sign In"
        subtitle="Use your email and password to sign in"
      />
      <OAuthSignIn />
    </div>
  );
}
