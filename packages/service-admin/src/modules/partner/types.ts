export default `
type AdminPartnerMutation {
  create(input: PartnerInput!, ownerId: ID): Partner
  update(id: ID!, input: PartnerInput!): Partner
  delete(id: ID!): Partner
}
`
