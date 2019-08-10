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
  staff: StaffQuery
}

input GroupInput {
  name: String!
}

type GroupMutation {
  create(input: GroupInput): Group
  update(id: ID!, input: GroupInput): Group
  delete(id: ID!): Group
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
