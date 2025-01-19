import {Request, Response} from 'express';
import { UpdateUserAvatarService } from '../../services/user/updateUserAvatarService';

class UpdateUserAvatarController{
    async handle(req: Request, res: Response){
        //const {banner} = req.body;

        const user_id = req.user_id;

        const updateUserAvatar = new UpdateUserAvatarService();

        if(!req.file){
            throw new Error("Error upload banner")
        }else{

            const { originalname, filename: avatar } = req.file;

            const updateBanner = await updateUserAvatar.execute({
                avatar,
                user_id
            })
    
            return res.json(updateBanner);

        }

     
    }
}

export {UpdateUserAvatarController}