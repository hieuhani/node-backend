export default `
type AdminUserMutation {
  create(input: UserInput!): User
  update(id: ID!, input: UserInput!): User
  delete(id: ID!): User
}
`
