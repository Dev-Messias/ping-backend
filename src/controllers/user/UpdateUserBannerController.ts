import {Request, Response} from 'express';
import { UpdateUserBannerService } from '../../services/user/UpdateUserBannerService';

class UpdateUserBannerController{
    async handle(req: Request, res: Response){
        //const {banner} = req.body;

        const user_id = req.user_id;

        const updateUserBanner = new UpdateUserBannerService();

        if(!req.file){
            throw new Error("Error upload banner")
        }else{

            const { originalname, filename: banner } = req.file;

            const updateBanner = await updateUserBanner.execute({
                banner,
                user_id
            })
    
            return res.json(updateBanner);

        }

     
    }
}

export {UpdateUserBannerController}