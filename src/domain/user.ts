type UserType = 'Member' | 'Guest' | 'Librarian';

interface User {
  id: number
  type: UserType
}

interface UserRepository {
    getUser: (id: number) => User
}   