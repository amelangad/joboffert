import prisma from '../../../lib/prisma'

export async function GET (req: Request, { params }: {params: {id:number}}) {
const offert = await prisma.offert.findMany({
    where:  {authorId: +params.id},
    include: {
        author: {
            select: {
                email: true,
                name: true,

            }
        }
    }
});

return new Response (JSON.stringify(offert))

}