import {Router} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreatePostController } from './controllers/post/CreatePostController'; 
import { UserPostController } from './controllers/post/UserPostController';
import { CreateLikeController } from './controllers/like/CreateLikeController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

//-- ROTAS POST --
router.post('/post', isAuthenticated, new CreatePostController().handle);
router.get('/user-post', isAuthenticated, new UserPostController().handle);

//-- ROTAS LIKE --
router.post('/like', isAuthenticated, new CreateLikeController().handle);

export {router};