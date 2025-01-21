import { Request, Response } from 'express';
import { UpdateUserDataService } from '../../services/user/UpdateUserDataService';

class UpdateUserDataController{
    async handle(req: Request, res: Response){
        const {name, bio} = req.body;
        const user_id = req.user_id;

        const updateDataService = new UpdateUserDataService();

        const user = await updateDataService.execute({
            user_id,
            name,
            bio
        })

        return res.json(user);
    }
}

export {UpdateUserDataController}