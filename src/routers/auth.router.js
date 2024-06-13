import express from 'express';
import { prisma } from '../utils/prisma.util.js'
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js';
import { AuthController } from '../controllers/auth.controller.js';
import { AuthRepository } from '../repositories/auth.repository.js';
import { AuthService } from '../services/auth.service.js';

const authrepository = new AuthRepository(prisma);
const authService = new AuthService(authrepository);
const authController = new AuthController(authService);

const authRouter = express.Router();

authRouter.post('/sign-up', signUpValidator, authController.signUp)
authRouter.post('/sign-in', signInValidator, authController.signIn)


export { authRouter };
