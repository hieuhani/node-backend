import * as Knex from 'knex';


export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('staffs', function (table) {
      table.uuid('id')
        .notNullable()
        .defaultTo(knex.raw('gen_random_uuid()'))
        .primary();
      table.uuid('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('staffs');
}
