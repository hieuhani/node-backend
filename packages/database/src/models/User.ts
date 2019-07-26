import { Model } from 'objection';
import bcrypt from 'bcrypt';

export class User extends Model {
  readonly id!: string;
  username!: string;
  firstName: string;
  lastName?: string;
  password?: string;

  static tableName = 'users';

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  $beforeInsert(context) {
    const maybePromise = super.$beforeInsert(context);

    return Promise.resolve(maybePromise).then(() => {
      return this.generateHash(this.password).then(hash => {
        this.password = hash;
      });
    });
  }

  $beforeUpdate(queryOptions, context) {
    const maybePromise = super.$beforeUpdate(queryOptions, context);

    return Promise.resolve(maybePromise).then(() => {
      const password = this.password;

      if (password) {
        return this.generateHash(this.password).then(hash => {
          this.password = hash;
        });
      }

      return Promise.resolve();
    });
  }

  verifyPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  generateHash = password => {
    if (password) {
      if (User.isBcryptHash(password)) {
        throw new Error(
          `bcrypt tried to hash another bcrypt hash: ${password}`,
        );
      }

      return bcrypt.hash(password, 12);
    }

    return Promise.resolve();
  };

  static isBcryptHash(str) {
    const protocol = str.split('$');

    // Ex $2a$12$K2CtDP7zSGOKgjXjxD9SYey9mSZ9Udio9C95K6wCKZewSP9oBWyPO
    return (
      protocol.length === 4 &&
      protocol[0] === '' &&
      ['2a', '2b', '2y'].indexOf(protocol[1]) > -1 &&
      /^\d+$/.test(protocol[2]) &&
      protocol[3].length === 53
    );
  }


  static jsonSchema = {
    type: 'object',
    required: ['username', 'firstName'],
    properties: {
      id: { type: 'string' },
      username: { type: 'string' },
      firstName: { type: 'string', minLength: 1, maxLength: 255 },
      lastName: { type: 'string', maxLength: 255 },
    }
  };
}
