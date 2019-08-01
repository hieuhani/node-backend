import { Model } from 'objection';
import { database } from '../../database';
import { User } from '../User';

Model.knex(database.instance());

describe('User class', () => {
  test('insert a new user', async () => {
    const hieu = await User.query().insert({
      username: 'hieuhani',
      firstName: 'Hieu',
      lastName: 'Tran',
    })
    expect(hieu).not.toBeNull();
    expect(hieu).toBeInstanceOf(User);
  });

  describe('user with password', () => {
    let user: User;
    beforeAll(async () => {
      user = await User.query().insert({
        username: 'userwithpassword',
        firstName: 'Hieu',
        lastName: 'Tran',
        password: 'password',
      })
    })

    test('password should be hashed and diffirent with plain password', () => {
      expect(user.password).not.toEqual('password');
    });

    test('verify password', async () => {
      expect(await user.verifyPassword('password')).toBeTruthy();
      expect(await user.verifyPassword('wrong password')).toBeFalsy();
    })
  })
});
