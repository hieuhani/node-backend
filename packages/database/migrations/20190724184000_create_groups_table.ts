import * as Knex from 'knex';


export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('groups', function (table) {
      table.uuid('id')
        .notNullable()
        .defaultTo(knex.raw('gen_random_uuid()'))
        .primary();
      table.string('name')
      table.boolean('protected').defaultTo(false)
      table.uuid('partner_id')
        .notNullable()
        .references('id')
        .inTable('partners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('groups');
}
