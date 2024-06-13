export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUser = async(id) => {
        const user = await this.userRepository.findById(id)
        const { email, name, role, createdAt, updatedAt } = user;
        return {
            email,
            name,
            role,
            createdAt,
            updatedAt,
        };
    }
}