import {type Metadata} from 'next';

import AuthCard from '@/sections/auth/auth-card';
import LoginActions from '@/sections/auth/login/login-actions';

export const metadata: Metadata = {
  title: 'Sign Up'
};

export default function Page() {
  return (
    <AuthCard
      title="Sign Up"
      subtitle="Use your email and password to sign up"
      actions={<LoginActions />}
    >
      <>Auth Form</>
    </AuthCard>
  );
}