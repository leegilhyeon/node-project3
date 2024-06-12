import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { UserController } from '../controllers/user.controller.js';

const usersRouter = express.Router();
const usercontroller = new UserController();

usersRouter.get('/me', requireAccessToken, usercontroller.getUser);

export { usersRouter };
