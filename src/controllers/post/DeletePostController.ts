import { Request, Response } from 'express';
import { DeletePostService } from '../../services/post/DeletePostService';

class DeletePostController{
    async handle(req: Request, res: Response){
        const {post_id} = req.body;

        const user_id = req.user_id;

        const deletePost = new DeletePostService();

        const post = await deletePost.execute({
            post_id,
            user_id
        })

        return res.json(post)
    }
}

export {DeletePostController}