import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserServices{
    async execute({name, email, password}: UserRequest){

        if(!email){
            throw new Error("Email incorrect")
        }

        //verificando se esse email já está cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                email: true,
                name: true,
                avatar: true,
                banner: true
            }
        })

        return user;
    }
}

export { CreateUserServices }