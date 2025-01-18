import { Request, Response } from "express";
import { RemoveLikeService } from "../../services/like/RemoveLikeService";



class RemoveLikeController{
    async handle(req: Request, res: Response){

        const {post_id} = req.body;

        const user_id = req.user_id;

        const removeLike = new RemoveLikeService();

        const rLike = await removeLike.execute({
            user_id,
            post_id
        })

        return res.json(rLike)
    }
}

export {RemoveLikeController}