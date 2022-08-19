import { Router } from 'express';
import { createUser, editProfile } from '../controllers/user.controller';

const userRouter = Router();


userRouter.post('/create-new-user', createUser);
userRouter.post('/edit-profile', editProfile);

export default userRouter;