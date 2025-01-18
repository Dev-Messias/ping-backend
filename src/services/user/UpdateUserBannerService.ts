import prismaClient from "../../prisma";

interface BannerRequest{
    banner: string, 
    user_id: string
}

class UpdateUserBannerService{
    async execute({banner, user_id}:BannerRequest){

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
                    banner
                },
                select:{
                    banner: true
                }
            })

            return userBannerUpdate;
            
        } catch (err) {
            throw new Error("Error an update the user!")
        }
    }
}

export {UpdateUserBannerService}