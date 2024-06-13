import { HASH_SALT_ROUNDS } from "../constants/auth.constant.js";
import bcrypt from 'bcrypt';

export class AuthRepository {
    constructor(prisma) {
        this.prisma = prisma
    }
    findUnique = async(email) => {
        const user = await this.prisma.user.findUnique({
            where: {email}
        })
        return user;
    }
    authSignUp = async (email, password, name) => {
        const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);

           const {_password, ...user} = await this.prisma.user.create({
                data: {
                  email,
                  password: hashedPassword,
                  name,
                },
             });
            return user;
    }
}