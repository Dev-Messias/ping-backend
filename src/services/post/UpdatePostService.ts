import prismaClient from "../../prisma";


interface PostRequest{
    post_id: string,
    author_id: string,
    textPost: string,
    imagePost?: string
}

class UpdatePostService{
    async execute({post_id, author_id, textPost, imagePost}:PostRequest){

        try {

            const postAlreadyExists = await prismaClient.post.findFirst({
                where:{
                    id: post_id,
                    author_id: author_id
                }
            })

            if(!postAlreadyExists){
                throw new Error("Post not exists!")
            }

            const userPostUpdate = await prismaClient.post.update({
                where:{
                    id: post_id,
                    author_id: author_id
                },
                data:{
                    textPost: textPost,
                    imagePost: imagePost
                },
                include:{
                    _count:{
                        select:{
                            likes: true
                        }
                    }
                }
            })

            return userPostUpdate;
            
        } catch (err) {
            throw new Error("Error an update the post!")
        }

    }
}

export {UpdatePostService}