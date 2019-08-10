
import { transaction } from 'objection'
import { Partner, Group, Staff } from '@node-backend/database'

export default {
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
