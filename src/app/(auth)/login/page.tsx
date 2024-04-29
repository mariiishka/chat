import AuthCard from '@/sections/auth/auth-card';
import LoginActions from '@/sections/auth/login/login-actions';
import {type Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Login'
};

export default function Page() {
  return (
    <AuthCard
      title="Sign in"
      subtitle="Use your email and password to sign in"
      actions={<LoginActions />}
    >
      <>Auth Form</>
    </AuthCard>
  );
}
