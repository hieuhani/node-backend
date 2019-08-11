import { mergeTypes } from 'merge-graphql-schemas'
import {
  authTypes,
  userTypes,
  partnerTypes,
  staffTypes,
} from '@node-backend/modules'
import partnerGroupTypes from './modules/group/types'

const rootType = `
scalar Date
type Query {
  user: UserQuery
  staff: StaffQuery
  group: GroupQuery
}

type Mutation {
  auth: AuthMutation
  user: UserMutation
  group: GroupMutation
}
`

export default mergeTypes([
  rootType,
  authTypes,
  userTypes,
  partnerTypes,
  partnerGroupTypes,
  staffTypes,
])
