export class UserRepository {
    constructor(prisma) {
        this.prisma = prisma
    }
    findById = async(id) => {
        return await this.prisma.user.findUnique({
            where:{ id}
        })
    }
}