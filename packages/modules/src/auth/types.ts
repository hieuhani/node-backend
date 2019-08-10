export default `
type AccessToken {
  token: String!
  expiresAt: Int!
}

type SignInResponse {
  accessToken: AccessToken
}

input SignInPayload {
  login: String!
  password: String!
}

type AuthMutation {
  signIn(payload: SignInPayload!) : SignInResponse
}
`
