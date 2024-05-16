import {type NextRequest, NextResponse} from 'next/server';
import {hash} from 'bcrypt';

import prisma from '@/shared/lib/db/db';

export async function POST(req: NextRequest) {
  const credentials = await req.json();

  if (credentials.password.lengh < 6) {
    return NextResponse.json({error: 'Invalid password'}, {status: 400});
  }

  try {
    const hashPassword = await hash(credentials.password, 10);
    const user = await prisma.user.create({
      data: {...credentials, password: hashPassword}
    });
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({message: 'success'}, {status: 200});
}
