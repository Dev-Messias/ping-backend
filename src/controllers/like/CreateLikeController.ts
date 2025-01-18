import { Request, Response } from 'express';

import { CreateLikeService } from '../../services/like/CreateLikeService';


class CreateLikeController{
    async handle(req: Request, res:Response){
        const {post_id} = req.body;

        const user_id = req.user_id;

        const createLikeService = new CreateLikeService();

        const like = await createLikeService.execute({
            user_id,
            post_id
        })

        return res.json(like)

    }
}

export {CreateLikeController}