import { Model } from 'objection';
import { database } from '../../../test-utils/database';
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
  })
});
