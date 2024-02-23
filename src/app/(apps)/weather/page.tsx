'use client';

import Header from '@/components/header';
import PostCard from '@/components/post-card';
import {Button} from '@/components/ui/button';
import type {Metadata} from 'next';
import {useState} from 'react';

// export const metadata: Metadata = {
//   title: 'Weather app'
// };

export default function Page() {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <Header />
      <h3 className="mb-2">Value: {counter}</h3>
      <div className="flex gap-4">
        <Button onClick={() => setCounter((state) => state + 1)}>Add</Button>
        <Button onClick={() => setCounter((state) => state - 1)}>remove</Button>
      </div>
      <PostCard id={1} title="Example" />
    </div>
  );
}
