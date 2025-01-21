import { Request, Response } from 'express';
import { UpdatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController {
    async handle(req: Request, res: Response) {
        const { post_id, textPost } = req.body;

        const user_id = req.user_id;

        const updatePostService = new UpdatePostService();

        if (!req.file) {

            const post = await updatePostService.execute({
                post_id: post_id,
                textPost,
                imagePost: null,
                author_id: user_id,
            })

            return res.json(post);
        } else {

            const { originalname, filename: imagePost } = req.file;

            const post = await updatePostService.execute({
                post_id: post_id,
                textPost,
                imagePost,
                author_id: user_id,
            })

            return res.json(post);
        }
    }
}
export { UpdatePostController }