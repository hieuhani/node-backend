
import { transaction } from 'objection'
import { Partner, Group, Staff } from '@node-backend/database'

export default {
  Query: {
    adminPartner: () => ({
      async partners({ offset = 0, limit = 10 }) {
        const edges = await Partner.query()
          .offset(offset)
          .limit(limit)
          .orderBy('created_at', 'DESC')
        const count = await Partner.query().resultSize()
        return {
          edges,
          count,
        }
      },
    }),
  },
  Mutation: {
    adminPartner: () => ({
      async create({ input, ownerId }) {
        return await transaction(Partner.knex(), async (trx) => {
          const partner = await Partner.query(trx).insert(input).first()
          const adminGroup = await partner.$relatedQuery<Group>('groups', trx)
            .insert({ name: 'Admin', protected: true })
          if (ownerId) {
            const adminStaff = await partner.$relatedQuery<Staff>('staffs', trx)
              .insert({ userId: ownerId })
            await adminGroup.$relatedQuery('staffs', trx).relate(adminStaff)
          }
          return partner
        })
      },
    }),
  },
}
