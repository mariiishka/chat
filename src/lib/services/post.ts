import {type Post} from '@/types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts(): Promise<Post[]> {
  const data = await fetch(BASE_URL, {
    next: {tags: ['posts']}
  });

  return data.json() as Promise<Post[]>;
}

export async function getPostById(id: number): Promise<Post[]> {
  const data = await fetch(`${BASE_URL}/${id}`, {
    next: {tags: ['posts']}
  });

  return data.json() as Promise<Post[]>;
}

export async function deletePostById(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {method: 'DELETE'});

  return res.json();
}
