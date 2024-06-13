import { AuthService } from "../services/auth.service.js";

export class AuthController {
    authService = new AuthService();

    signUp = async (req, res, next) => {
        try{
            const { email, password, name } = req.body;
            const signUp = await this.authService.signUp(
                email, password, name
            );

            return res.status(signUp.status).json({signUp});
        } catch(err) {
            next(err)
        }
    };

    signIn = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const signIn = await this.authService.signIn(
                email, password);
        
            return res.status(signIn.status).json({signIn});
          } catch (error) {
            next(error);
          }
    };
}