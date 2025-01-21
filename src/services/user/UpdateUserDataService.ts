import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string,
    name: string;
    bio: string;
}

class UpdateUserDataService {
    async execute({ user_id, name, bio }: UserRequest) {
        try {

            if(!name || name == ''){
                throw new Error("name incorrect")
            }

            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                }
            })

            if (!userAlreadyExists) {
                throw new Error("User not exists!")
            }

            const userUpdate = await prismaClient.user.update({
                where: {
                    id: user_id
                },
                data: {
                    name: name,
                    bio: bio
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    bio: true,
                    avatar: true,
                    banner: true
                }
            })

            return userUpdate;

        } catch (err) {
            throw new Error("Error an update the user!")
        }
    }
}

export { UpdateUserDataService }