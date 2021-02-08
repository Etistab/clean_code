class nedbUser implements UserRepository {
    users = new Datastore('datastore/users.db')

    getUser(id: number): User {
        return this.users.find({ id: id })
    }
}
