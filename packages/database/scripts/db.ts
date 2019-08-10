import { Database } from '../src/database';
import fs from 'fs';
import task from './task';
import { yyyymmddhhmmss } from './utils';

const db = new Database({
  connection: 'postgresql://hieuhani@localhost:5432/node_backend_dev',
  client: 'postgres',
}).instance();

const command = process.argv[2];

module.exports = task('db', async () => {
  switch (command) {
    case 'make:migration': {
      const name = process.argv[3];
      if (!name) {
        throw new Error('A name must be specified for the generated migration');
      }
      const filename = `${yyyymmddhhmmss()}_${name}.ts`;
      const template = `import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
}

export async function down(knex: Knex): Promise<any> {
}
      `;
      fs.writeFileSync(
        `migrations/${filename}`,
        template,
        'utf8',
      );
      break;
    }
    case 'migrate': {
      await db.migrate.latest();
      break;
    }
    case 'seed':
      await db.seed.run();
      break;
    default:
      throw new Error(`Unknown command: ${command}`);
  }
  process.exit(0);
});
