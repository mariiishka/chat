'use client';
import {type FC, type ReactNode} from 'react';

type Props = {
  title: string;
  subtitle?: string;
  form: ReactNode;
};

const AuthCard: FC<Props> = ({title, subtitle, form}) => {
  return (
    <div className="rounded-lg shadow-md text-gray-200 w-full bg-gray-600">
      <div className="rounded-t-lg bg-gray-500 flex flex-col gap-3 text-center px-4 py-6 border-b border-gray-300">
        <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
        {!!subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
      <div className="px-4 py-8 flex flex-col items-center">{form}</div>
    </div>
  );
};

export default AuthCard;
