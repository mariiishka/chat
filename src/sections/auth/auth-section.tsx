import {type FC} from 'react';
import OAuthProviders from './oath-providers';

type Props = {
  authCard: React.ReactNode;
};

const AuthSection: FC<Props> = ({authCard}) => {
  return (
    <div className="flex flex-col gap-4 max-w-lg w-full">
      {authCard}
      <OAuthProviders />
    </div>
  );
};

export default AuthSection;
