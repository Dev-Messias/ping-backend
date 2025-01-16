import {Request, Response} from 'express';

import { CreatePostServices } from '../../services/post/CreatePostServices';

class CreatePostController{
    async handle(req: Request, res: Response){

        const {textPost, imagePost} = req.body;

        const author_id = req.user_id;

        const createPostServices = new CreatePostServices();

        const post = await createPostServices.execute({
            textPost,
            imagePost,
            author_id
        })

        return res.json(post);
    }
}

export {CreatePostController}