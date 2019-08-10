export default `
type Group {
  id: ID!
  name: String
}

input GroupInput {
  name: String!
}

type GroupMutation {
  create(input: GroupInput): Group
  update(id: ID!, input: GroupInput): Group
  delete(id: ID!): Group
}
`
