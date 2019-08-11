import { User } from '@node-backend/database'

export default {
  Mutation: {
    signIn: async ({ input }) => {
      const user = await User.query().where('username', input.login).first()
      if (!user) {
        throw new Error('This user does not exists')
      }
      if (!await user.verifyPassword(input.password)) {
        throw new Error('Wrong login name or password')
      }
      return {
        accessToken: user.generateToken()
      }
    },
  }
}
