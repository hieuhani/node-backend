export default `
type AdminPartnerMutation {
  create(input: PartnerInput!): Partner
  update(id: ID!, input: PartnerInput!): Partner
  delete(id: ID!): Partner
}
`
