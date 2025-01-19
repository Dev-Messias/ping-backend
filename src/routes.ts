import {Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserBannerController } from './controllers/user/UpdateUserBannerController';
import { CreatePostController } from './controllers/post/CreatePostController'; 
import { UserPostController } from './controllers/post/UserPostController';
import { CreateLikeController } from './controllers/like/CreateLikeController';
import { UpdateUserAvatarController } from './controllers/user/UpdateUserAvatarController';
import { DeletePostController } from './controllers/post/DeletePostController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { RemoveLikeController } from './controllers/like/RemoveLikeController';

import uploadConfig from './config/multer';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/user-banner', isAuthenticated, upload.single('file'), new UpdateUserBannerController().handle);
router.put('/user-avatar', isAuthenticated, upload.single('file'), new UpdateUserAvatarController().handle);

//-- ROTAS POST --
router.post('/post', isAuthenticated, upload.single('file'), new CreatePostController().handle);
router.get('/user-post', isAuthenticated, new UserPostController().handle);
router.delete('/remove-post', isAuthenticated, new DeletePostController().handle);

//-- ROTAS LIKE --
router.post('/like', isAuthenticated, new CreateLikeController().handle);
router.delete('/remove-like', isAuthenticated, new RemoveLikeController().handle);

export {router};