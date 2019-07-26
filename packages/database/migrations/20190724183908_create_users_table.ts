import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('users', function (table) {
      table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid()')).primary();
      table.string('username').unique();
      table.string('first_name');
      table.string('last_name').nullable();
      table.string('password', 128);
      table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('users');
}
