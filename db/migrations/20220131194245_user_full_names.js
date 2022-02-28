
exports.up = knex =>
  knex.schema
    .alterTable('users', table => {
      table.text('first_name').defaultTo('');
      table.text('last_name').defaultTo('');
    });
exports.down = knex =>
  knex.schema
    .alterTable('users', table => {
      table.dropColumn('first_name');
      table.dropColumn('last_name');
    });
