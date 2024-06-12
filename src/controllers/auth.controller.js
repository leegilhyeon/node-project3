export class AuthController {
    authService = new AuthService();

    signUpPosts = async (req, res, next) => {
        try{
            const { email, password, name } = req.body;

            const signUpPosts = await this.authService.signUpPosts(
                email, password, name
            );

            return res.status(201).json({ data: signUpPosts});
        } catch(err) {
            next(err)
        }
    }

    signInPosts = async (req, res, next) => {
        try{
            const { email, password } = req.body;
            

        } catch(err) {
            next(err)
        }
    }
}