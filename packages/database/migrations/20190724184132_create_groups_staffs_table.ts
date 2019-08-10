import * as Knex from 'knex';


export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('groups_staffs', function (table) {
      table.uuid('id')
        .notNullable()
        .defaultTo(knex.raw('gen_random_uuid()'))
        .primary();
      table.uuid('group_id')
        .notNullable()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.uuid('staff_id')
        .notNullable()
        .references('id')
        .inTable('staffs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
      table.index(['staff_id', 'group_id']);
    });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('staffs');
}
