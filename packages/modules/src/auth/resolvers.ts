export default {
  Mutation: {
    signIn: ({ input }) => {
      console.log(input)
      return {
        accessToken: 'Test Access Token'
      }
    },
  }
}
