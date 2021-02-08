class Login {
    userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }
    
    log(id: number): User {
        return this.userRepository.getUser(id)
    }
}