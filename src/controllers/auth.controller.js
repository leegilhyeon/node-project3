import { AuthService } from "../services/auth.service.js";

export class AuthController {
    authService = new AuthService();

    signUpPosts = async (req, res, next) => {
        try{
            const { email, password, name } = req.body;

            const signUpPosts = await this.authService.signUpPosts(
                email, password, name
            );

            return res.status(signUpPosts.status).json({signUpPosts});
        } catch(err) {
            next(err)
        }
    };

    signInPosts = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const signInPosts = await this.authService.signInPosts(
                email, password);
        
            return res.status(signInPosts.status).json({signInPosts});
          } catch (error) {
            next(error);
          }
    };
}