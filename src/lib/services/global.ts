'use server';

import {revalidateTag} from 'next/cache';

export async function revalidateTagOnClient(tag: string) {
  revalidateTag(tag);
}
