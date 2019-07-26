import { Model, RelationMappings } from 'objection';
import { Partner } from './Partner';

export class Group extends Model {
  readonly id!: string;
  partnerId!: string;
  name: string;

  partner!: Partner;

  static tableName = 'groups';

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
    }
  };

  static relationMappings: RelationMappings = {
    partner: {
      relation: Model.BelongsToOneRelation,
      modelClass: 'Partner',
      join: {
        from: 'groups.partnerId',
        to: 'partners.id',
      },
    },
  }
}
