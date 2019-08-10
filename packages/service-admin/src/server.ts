import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './schemas'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
});

server.listen(3001)
  .then(({ url }) => console.log(`Server service-admin ready at ${url}. `));
