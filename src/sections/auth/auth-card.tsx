import {type PropsWithChildren, type FC, type ReactNode} from 'react';

type Props = PropsWithChildren & {
  title: string;
  subtitle?: string;
  actions: ReactNode;
};

const AuthCard: FC<Props> = ({children, title, subtitle, actions}) => {
  return (
    <>
      <div className="mb-4 rounded-lg shadow-md text-gray-200 max-w-md w-full bg-gray-600">
        <div className="rounded-t-lg bg-gray-500 flex flex-col gap-3 text-center px-4 py-6 border-b border-gray-300">
          <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
          {!!subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        <div className="px-4 py-8 flex flex-col items-center">{children}</div>
      </div>
      <div className="flex justify-center items-center gap-2">{actions}</div>
    </>
  );
};

export default AuthCard;
