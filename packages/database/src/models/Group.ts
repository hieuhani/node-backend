import { Model, RelationMappings } from 'objection'
import { Partner } from './Partner'
import { Staff } from './Staff'

export class Group extends Model {
  readonly id!: string;
  partnerId!: string;
  name: string;
  protected: boolean;

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
    staffs: {
      relation: Model.ManyToManyRelation,
      modelClass: Staff,
      join: {
        from: 'groups.id',
        through: {
          from: 'groups_staffs.groupId',
          to: 'groups_staffs.staffId'
        },
        to: 'staffs.id'
      }
    }
  }
}
