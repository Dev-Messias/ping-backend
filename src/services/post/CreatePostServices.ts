import prismaClient from "../../prisma";

interface PostRequest {
    textPost: string;
    imagePost?: string;
    author_id: string;
}

class CreatePostServices{
    async execute({textPost, imagePost, author_id}:PostRequest){

        if(!textPost){
            throw new Error("Text incorrect")
        }

        const post = await prismaClient.post.create({
            data:{
                textPost: textPost,
                imagePost: imagePost,
                author_id: author_id
            },
            include:{
                _count:{
                    select:{
                        likes: true
                    }
                }
            }
        })

        return post
    }
}

export {CreatePostServices}