'use server';

import {revalidateTag} from 'next/cache';

export function revalidateTagOnClient(tag: string) {
  revalidateTag(tag);
}
