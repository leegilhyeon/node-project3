import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { UserController } from '../controllers/user.controller.js';

const usersRouter = express.Router();
const usercontroller = new UserController();

usersRouter.get('/me', requireAccessToken, usercontroller.getUser);

export { usersRouter };
