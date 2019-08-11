import { mergeTypes } from 'merge-graphql-schemas'
import {
  authTypes,
  userTypes,
  partnerTypes,
} from '@node-backend/modules'
import adminPartnerTypes from './modules/partner/types'
import adminUserTypes from './modules/user/types'

const rootType = `
scalar Date
type Query {
  user: UserQuery
  adminPartner: AdminPartnerQuery
}

type Mutation {
  auth: AuthMutation
  user: UserMutation
  adminPartner: AdminPartnerMutation
  adminUser: AdminUserMutation
}
`

export default mergeTypes([
  rootType,
  authTypes,
  userTypes,
  partnerTypes,
  adminPartnerTypes,
  adminUserTypes,
])
