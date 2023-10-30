
import { signJwtAccessToken } from '@/app/lib/jwt';
import prisma from '../../lib/prisma'
import {NextResponse} from 'next/server';

interface RequestBody {
    title: string
    content: string
    salary: GLfloat,
    user: string,
    authorId: number,
    published: boolean,
    id: number,
    offert:[],
}
export async function POST (req: Request){
const body: RequestBody = await req.json();
    const offert = await prisma.offert.create({
      data: {
        title: body.title,
        content: body.content,
        salary: Number(body.salary),
        authorId: 1,
        published: true,
    }})


    return new Response(JSON.stringify(offert));
 }
