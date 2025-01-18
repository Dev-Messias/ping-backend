import { Request, Response } from "express";
import { UserPostService } from "../../services/post/UserPostService";

class UserPostController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;

        const userPostService = new UserPostService();

        const userPost = await userPostService.execute(user_id);

        return res.json(userPost);
    }
}

export {UserPostController}