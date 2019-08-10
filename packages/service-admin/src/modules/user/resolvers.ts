import { User } from '@node-backend/database'

export default {
  Mutation: {
    adminUser: () => ({
      async create({ input }) {
        const checkingUser = await User
          .query()
          .where('username', input.username.toLowerCase())
          .first()
        if (checkingUser) {
          throw new Error('This username is existing')
        }
        return await User.query().insert(Object.assign({}, input, {
          username: input.username.toLowerCase(),
        }))
      },
    }),
  },
}
