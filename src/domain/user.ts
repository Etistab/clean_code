type UserType = 'Member' | 'Guest' | 'Librarian';

interface User {
  type: UserType
}

interface UserRepository {
    getUser: (id: number) => User
}   