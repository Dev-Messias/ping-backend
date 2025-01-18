import prismaClient from "../../prisma";

interface LikeRequest{
    user_id: string;
    post_id: string;
}

class CreateLikeService{
    async execute({user_id, post_id}: LikeRequest){
        if(!post_id){
            throw new Error("Algo deu errado, tente novamente mais tarde.")
        }

        const like = await prismaClient.like.create({
            data:{
                user_id: user_id,
                post_id: post_id
            }
        })

        return like;
    }
}

export {CreateLikeService}