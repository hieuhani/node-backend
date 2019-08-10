import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './schemas'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
});

server.listen(3000)
  .then(({ url }) => console.log(`Server service-partner ready at ${url}. `));
