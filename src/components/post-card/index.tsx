'use client';

import {memo, type FC} from 'react';

import {Button} from '@/components/ui/button';

import {deletePostById} from '@/lib/services/post';
import {revalidateTagOnClient} from '@/lib/services/global';

type Props = {
  title: string;
  id: number;
};

const PostCard: FC<Props> = ({id, title}) => {
  const handleDelete = async () => {
    const res = await deletePostById(id);

    await revalidateTagOnClient('posts');

    console.log(res, '---------RES--------');
  };

  return (
    <div key={id} className="w-[300px] h-[300px] p-6 bg-gray-700">
      <h3 className="mb-4">{title}</h3>
      <Button onClick={handleDelete} variant="destructive">
        Delete
      </Button>
    </div>
  );
};

export default memo(PostCard);
