export default `
type SignInResponse {
  accessToken: String
}

input SignInInput {
  login: String!
  password: String!
}

type AuthMutation {
  signIn(input: SignInInput!) : SignInResponse
}
`
