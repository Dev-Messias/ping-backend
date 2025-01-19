import { Request, Response } from 'express';

import { CreatePostServices } from '../../services/post/CreatePostServices';

class CreatePostController {
    async handle(req: Request, res: Response) {

        const { textPost } = req.body;

        const author_id = req.user_id;

        const createPostServices = new CreatePostServices();

        if (!req.file) {

            const post = await createPostServices.execute({
                textPost,
                imagePost: null,
                author_id
            })

            return res.json(post);
        } else {

            const { originalname, filename: imagePost } = req.file;

            const post = await createPostServices.execute({
                textPost,
                imagePost,
                author_id
            })

            return res.json(post);

        }
    }
}

export { CreatePostController }