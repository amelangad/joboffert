import { signJwtAccessToken } from '@/app/lib/jwt';
import prisma from '../../lib/prisma'
import * as bcrypt from 'bcrypt'

interface RequestBody {
    username: string,
    password: string;
}

export async function POST (req: Request){
const body:RequestBody = await req.json();

const user = await prisma.user.findFirst({
    where: {
        email: body.username,
    }
})

if (user && ( await bcrypt.compare(body.password, user.password) )){
  const {password, ...rest } = user
  const accesToken = signJwtAccessToken(rest);
  const result = {
    ...rest,
    accesToken,
  }

  return new Response (JSON.stringify(result))
} else return new Response (JSON.stringify(null));
}