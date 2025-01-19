import prismaClient from "../../prisma";

interface PostRequest{
    user_id: string;
    post_id: string;
}

class DeletePostService{
    async execute({user_id, post_id}:PostRequest){
        const post = await prismaClient.post.deleteMany({
            where:{
                 id: post_id,
                author_id: user_id
                
            }
        })

        return post;
    }
}

export {DeletePostService}