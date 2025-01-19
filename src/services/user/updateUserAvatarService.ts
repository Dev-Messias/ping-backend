import prismaClient from "../../prisma";

interface BannerRequest{
    avatar: string, 
    user_id: string
}

class UpdateUserAvatarService{
    async execute({avatar, user_id}:BannerRequest){

        try {

            const userAlreadyExists = await prismaClient.user.findFirst({
                where:{
                    id: user_id
                }
            })

            //se não exitir o usuario
            if(!userAlreadyExists){
                throw new Error("User not exists!")
            }

            const userBannerUpdate = await prismaClient.user.update({
                where:{
                    id: user_id
                },
                data:{
                    avatar
                },
                select:{
                    avatar: true
                }
            })

            return userBannerUpdate;
            
        } catch (err) {
            throw new Error("Error an update the user!")
        }
    }
}

export {UpdateUserAvatarService}