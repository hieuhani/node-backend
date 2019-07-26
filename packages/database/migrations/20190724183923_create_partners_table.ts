import * as Knex from 'knex';


export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('partners', function (table) {
      table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid()')).primary();
      table.string('name');
      table.string('website').nullable();
      table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('partners');
}
