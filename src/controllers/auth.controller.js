import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

export class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    
    signUp = async (req, res, next) => {
        try{
            const { email, password, name } = req.body;
            const signUp = await this.authService.signUp(
                email, password, name
            );

            return res.status(HTTP_STATUS.CREATED).json({ 
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
                data: signUp});
        } catch(error) {
            next(error)
        }
    };

    signIn = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const signIn = await this.authService.signIn(
                email, password);
        
                return res.status(HTTP_STATUS.OK).json({
                    status: HTTP_STATUS.OK,
                    message: MESSAGES.AUTH.SIGN_IN.SUCCEED,
                    data: signIn,
                  })
          } catch (error) {
            next(error);
          }
    };
}