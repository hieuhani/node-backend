export default `
type User {
  id: ID!
  username: String!
  firstName: String!
  lastName: String
}

input UserInput {
  username: String
  firstName: String
  lastName: String
  password: String
}

type UserQuery {
  """My profile details"""
  me: User
}

type UserMutation {
  update(input: UserInput!): User
}
`
