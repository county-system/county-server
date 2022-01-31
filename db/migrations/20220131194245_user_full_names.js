
exports.up = knex =>
  knex.schema
    .alterTable('users', table => {
      table.text('first_name').defaultTo('');
      table.text('last_name').defaultTo('');
    });

exports.down = knex =>
  knex.schema
    .dropColumn('users', 'first_name')
    .dropColumn('users', 'last_name');