export default {
  Mutation: {
    adminUser: () => ({
      create({ input }) {
        console.log(input)
        return {
          username: 'Hieu',
          firstName: 'Tran',
          lastName: 'Duc'
        }
      },
    }),
  },
}
