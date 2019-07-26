import * as Knex from 'knex';


export async function up(knex: Knex): Promise<any> {
  return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.raw('DROP EXTENSION IF EXISTS "pgcrypto";');
}

