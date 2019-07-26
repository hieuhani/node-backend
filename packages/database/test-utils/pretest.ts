import { clearDatabase, migrateDatabase } from './database';

const globalSetup = async () => {
  console.log('Clear up existing database');
  await clearDatabase();
  console.log('Migrate database');
  await migrateDatabase();
  process.exit(0);
};

globalSetup();
