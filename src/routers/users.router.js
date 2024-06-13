import express from 'express';
import { prisma } from '../utils/prisma.util.js';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { UserController } from '../controllers/user.controller.js';
import { UserRepository } from '../repositories/users.repository.js';
import { UserService } from '../services/users.service.js';

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const usersRouter = express.Router();

usersRouter.get('/me', requireAccessToken, userController.getUser);

export { usersRouter };
