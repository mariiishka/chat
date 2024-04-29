import {type PropsWithChildren} from 'react';

export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <main className="h-[100vh] dark flex flex-col justify-center items-center bg-gray-900">
      {children}
    </main>
  );
}
