'use client';
import {type FC, type ReactNode} from 'react';

type Props = {
  title: string;
  subtitle?: string;
  form: ReactNode;
};

const AuthCard: FC<Props> = ({title, subtitle, form}) => {
  return (
    <div className="rounded-lg shadow-md text-slate-200 w-full bg-slate-600">
      <div className="rounded-t-lg bg-slate-500 flex flex-col gap-3 text-center px-4 py-6 border-b border-slate-300">
        <h1 className="text-xl font-semibold text-slate-100">{title}</h1>
        {!!subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
      <div className="px-4 py-8 flex flex-col items-center">{form}</div>
    </div>
  );
};

export default AuthCard;
