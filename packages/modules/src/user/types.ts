export default `
type User {
  id: ID!
  username: String!
  firstName: String!
  lastName: String
}

input UpdateUserPayload {
  firstName: String
  lastName: String
  password: String
}

type UserQuery {
  """My profile details"""
  me: User
  """Working partners information and staff details"""
  staffs: [Staff]
}

type UserMutation {
  update(payload: UpdateUserPayload!): User
}
`
