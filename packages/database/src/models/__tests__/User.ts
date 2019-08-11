import { Model } from 'objection'
import tk from 'timekeeper'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import { database } from '../../database'
import { User } from '../User'

Model.knex(database.instance());

describe('User class', () => {
  test('insert a new user', async () => {
    const hieu = await User.query().insert({
      username: 'hieuhani',
      firstName: 'Hieu',
      lastName: 'Tran',
    })
    expect(hieu).not.toBeNull()
    expect(hieu).toBeInstanceOf(User)
  })

  describe('user instance methods', () => {
    let user: User
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
    })

    test('verify password', async () => {
      expect(await user.verifyPassword('password')).toBeTruthy();
      expect(await user.verifyPassword('wrong password')).toBeFalsy();
    })

    describe('jwt token', () => {
      let token: string
      beforeAll(async () => {
        token = await user.generateToken()
      })

      test('jwt token is generated', async () => {
        expect(token).not.toBeNull()
      })

      test('jwt token has valid payload', () => {
        const decoded = jwt.verify(token, 'private key')
        expect(decoded.id).toEqual(user.id)
      })

      test('with invalid secret key, it throws invalid signature', () => {
        expect(() => {
          jwt.verify(token, 'not private key')
        }).toThrow('invalid signature')
      })

      test('after token expiration time, it throws jwt expired', () => {
        tk.travel(moment().add(1, 'M').toDate())
        expect(() => {
          jwt.verify(token, 'private key')
        }).toThrow('jwt expired')
        tk.reset()
      })
    })
  })
})
