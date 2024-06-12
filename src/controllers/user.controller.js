export class UserController {
    getUser = async (req, res, next) => {
        try{
            const data = req.user;

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.USERS.READ_ME.SUCCEED,
      data,})
        } catch(err) {
            next(err)
        }
    }
}