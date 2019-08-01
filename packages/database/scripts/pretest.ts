import { database } from '../src/database';

export async function clearDatabase() {
  const conn = await database.getConnection();
  return conn.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
}

export async function migrateDatabase() {
  const conn = await database.createConnection();
  return conn.migrate.latest();
}

const globalSetup = async () => {
  console.log('Clear up existing database');
  await clearDatabase();
  console.log('Migrate database');
  await migrateDatabase();
  process.exit(0);
};

globalSetup();
