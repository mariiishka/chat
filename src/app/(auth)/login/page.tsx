import {type Metadata} from 'next';

import AuthCard from '@/sections/auth/auth-card';
import LoginActions from '@/sections/auth/login/login-actions';

export const metadata: Metadata = {
  title: 'Login'
};

export default function Page() {
  return (
    <AuthCard
      title="Sign In"
      subtitle="Use your email and password to sign in"
      actions={<LoginActions />}
    >
      <>Auth Form</>
    </AuthCard>
  );
}
