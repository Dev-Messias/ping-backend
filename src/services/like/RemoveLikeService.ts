import prismaClient from "../../prisma";

interface LikeRequest{
    user_id: string;
    post_id: string;
}

class RemoveLikeService{
    async execute({user_id, post_id}:LikeRequest){
        const like = await prismaClient.like.deleteMany({
            where:{
                user_id: user_id,
                post_id: post_id
            }
        })

        return like
    }
}

export {RemoveLikeService}