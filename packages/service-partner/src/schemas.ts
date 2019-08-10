import { mergeTypes } from 'merge-graphql-schemas'
import {
  authTypes,
  userTypes,
  partnerTypes,
  groupTypes,
  staffTypes,
} from '@node-backend/modules'

const rootType = `
scalar Date
type Query {
  user: UserQuery
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
  groupTypes,
  staffTypes,
])
