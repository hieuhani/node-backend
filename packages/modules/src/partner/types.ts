export default `
type Partner {
  id: ID!
  name: String
  website: String!
}

input PartnerInput {
  name: String!
  website: String
}
`
