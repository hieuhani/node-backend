import adminUserResolvers from './modules/user/resolvers'

export default {
  Query: {
  },
  Mutation: {
    ...adminUserResolvers.Mutation,
  },
}
