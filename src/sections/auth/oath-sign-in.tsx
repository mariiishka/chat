'use client';

import {type FC} from 'react';

const OAuthSignIn: FC = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="rounded px-3 py-2 bg-gray-600 text-gray-100">google</div>
      <div className="rounded px-3 py-2 bg-gray-600 text-gray-100">github</div>
    </div>
  );
};

export default OAuthSignIn;
