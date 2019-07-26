import { Database } from '../src/database';

export const database = new Database({
  client: 'pg',
  connection: 'postgresql://hieu:password@localhost:5432/node_backend_test',
})

export async function clearDatabase() {
  const conn = await database.getConnection();
  return conn.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
}

export async function migrateDatabase() {
  const conn = await database.createConnection();
  return conn.migrate.latest();
}
