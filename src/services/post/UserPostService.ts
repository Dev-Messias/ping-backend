import prismaClient from "../../prisma";

class UserPostService{
    async execute(user_id: string){

        const post = await prismaClient.post.findMany({
            where:{
                author_id: user_id
            },
            include:{
                _count:{
                    select:{
                        likes: true
                    }
                }
            }
        })

        return post;
    }
}

export { UserPostService }