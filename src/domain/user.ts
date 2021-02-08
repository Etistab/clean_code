export type UserType = 'Member' | 'Guest' | 'Librarian';

export interface User {
  id: number
  type: UserType
}

export interface UserRepository {
    getUser: (id: number) => User
}   