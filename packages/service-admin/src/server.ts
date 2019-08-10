import { ApolloServer } from 'apollo-server'
import { Database } from '@node-backend/database'
import resolvers from './resolvers'
import typeDefs from './schemas'

const database = new Database({
  client: 'pg',
  connection: 'postgresql://hieuhani@localhost:5432/node_backend_dev',
})

database.bindObjection()

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
  context: ({ req }) => ({
    database,
  }),
});

server.listen(3001)
  .then(({ url }) => console.log(`Server service-admin ready at ${url}. `));
