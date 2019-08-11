import adminUserResolvers from './modules/user/resolvers'
import adminPartnerResolvers from './modules/partner/resolvers'

export default {
  Query: {
    ...adminPartnerResolvers.Query,
  },
  Mutation: {
    ...adminUserResolvers.Mutation,
    ...adminPartnerResolvers.Mutation,
  },
}
