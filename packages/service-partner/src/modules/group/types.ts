export default `
type Group {
  id: ID!
  name: String
}
input GroupInput {
  name: String!
}

type GroupConnection {
  edges: [Group!]!
  count: String
}

type GroupQuery {
  groups(offset: Int, limit: Int): GroupConnection!
}

type GroupMutation {
  create(input: GroupInput): Group
  update(id: ID!, input: GroupInput): Group
  delete(id: ID!): Group
}
`
