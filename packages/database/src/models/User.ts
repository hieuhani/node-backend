import { Model } from 'objection';

export class User extends Model {
  readonly id!: string;
  username!: string;
  firstName: string;
  lastName?: string;

  static tableName = 'users';

  fullName() {
    return `${this.firstName} ${this.lastName}`;
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
