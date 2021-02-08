import { Login } from '../src/use_case/login';
import { UserType } from '../src/domain/user';
import { NedbUser } from '../src/infrastructure/dao/nedb_user';


describe('Use case: login', () => {
  const userRepo = new NedbUser()

  const user = { id: 1, type: 'Librarian' as UserType }


  it('When I log in, i get the right user', async () => {
    const login = new Login(userRepo)
   
    expect(login.log(user.id)).toEqual(user);
  });
});