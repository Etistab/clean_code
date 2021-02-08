import { User , UserRepository } from 'domain/user'
const Datastore = require('nedb')


export class NedbUser implements UserRepository {
    users = new Datastore('datastore/users.db')

    getUser(id: number): User {
        return this.users.find({ id: id })
    }
}
