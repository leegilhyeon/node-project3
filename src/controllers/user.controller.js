import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

export class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUser = async (req, res, next) => {
        try{
            const {id} = req.user;
            const user = await this.userService.gerUser(id);

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.USERS.READ_ME.SUCCEED,
      data: user,})
        } catch(err) {
            next(err)
        }
    }
}