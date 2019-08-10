import { Model } from 'objection'

export class Staff extends Model {
  readonly id!: string;
  partnerId!: string;
  userId!: string;

  static tableName = 'staffs';

  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
    }
  };
}
