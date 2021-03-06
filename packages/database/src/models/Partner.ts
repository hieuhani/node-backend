import { Model, RelationMappings } from 'objection'
import { Group } from './Group'
import { Staff } from './Staff'

export class Partner extends Model {
  readonly id!: string;
  name: string;
  website?: string;
  groups?: Group[];

  static tableName = 'partners';

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      website: { type: 'string' },
    }
  };

  static relationMappings: RelationMappings = {
    groups: {
      relation: Model.HasManyRelation,
      modelClass: Group,
      join: {
        from: 'partners.id',
        to: 'groups.partnerId',
      },
    },
    staffs: {
      relation: Model.HasManyRelation,
      modelClass: Staff,
      join: {
        from: 'partners.id',
        to: 'staffs.partnerId',
      },
    },
  }
}
