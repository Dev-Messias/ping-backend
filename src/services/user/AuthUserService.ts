import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}:AuthRequest){
        //verificando se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect");
        }

        //verificando se senha esta correta
        const passwordMath = await compare(password, user.password)

        if(!passwordMath){
            throw new Error("User/password incorrect");
        }


        //gerar um token
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            banner: user.banner,
            token: token
        }
    }
}

export {AuthUserService}