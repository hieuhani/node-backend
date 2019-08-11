export default `
type PartnerConnection {
  edges: [Partner!]!
  count: Int
}

type AdminPartnerQuery {
  partners(offset: Int, limit: Int): PartnerConnection!
}

type AdminPartnerMutation {
  create(input: PartnerInput!, ownerId: ID): Partner
  update(id: ID!, input: PartnerInput!): Partner
  delete(id: ID!): Partner
}
`
