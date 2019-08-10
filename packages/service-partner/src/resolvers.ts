import {
  authResolvers,
} from '@node-backend/modules'

export default {
  Query: {
  },
  Mutation: {
    auth: () => ({
      ...authResolvers.Mutation,
    }),
  },
}
