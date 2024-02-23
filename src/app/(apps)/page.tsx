import type {Metadata} from 'next';

import {getPosts} from '@/lib/services/post';
import PostCard from '@/components/post-card';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Information about me'
};

export default async function Page() {
  const data = await getPosts();

  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        {data.map(({id, title}) => (
          <PostCard key={id} id={id} title={title} />
        ))}
      </div>
    </div>
  );
}
