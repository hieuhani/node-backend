import { mergeTypes } from 'merge-graphql-schemas'
import {
  authTypes,
  userTypes,
  partnerTypes,
} from '@node-backend/modules'
import adminPartnerTypes from './modules/partner/types'

const rootType = `
scalar Date
type Query {
  user: UserQuery
}

type Mutation {
  auth: AuthMutation
  user: UserMutation
  partner: AdminPartnerMutation
}
`

export default mergeTypes([
  rootType,
  authTypes,
  userTypes,
  partnerTypes,
  adminPartnerTypes,
])
