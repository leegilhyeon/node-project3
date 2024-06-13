import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { MESSAGES } from "../constants/message.constant.js";
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { ACCESS_TOKEN_EXPIRES_IN } from '../constants/auth.constant.js';
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js';

export class AuthService{
  constructor(authrepository) {
    this.authrepository = authrepository
  }
    signUp = async (email, password, name) => {
        //const existedUser = await prisma.user.findUnique({ where: {email}});
          const existedUser = await this.authrepository.findUnique(email);

        if (existedUser) {
            return res.status(HTTP_STATUS.CONFLICT).json({
            status: HTTP_STATUS.CONFLICT,
            message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
         });
        }
        const user = await this.authrepository.authSignUp(email, password, name)
        return {
          user: {id,
          email,
          name,
          role,
          createdAt,
          updatedAt}
        }
            
        };

    signIn = async (email, password) => {
         const user = await this.authrepository.findUnique(email);
        
            const isPasswordMatched =
              user && bcrypt.compareSync(password, user.password);
        
            if (!isPasswordMatched) {
              return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                status: HTTP_STATUS.UNAUTHORIZED,
                message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
              });
            }
        
            const payload = { id: user.id };
        
            const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
              expiresIn: ACCESS_TOKEN_EXPIRES_IN,
            }); 
            return {accessToken}
        };
}