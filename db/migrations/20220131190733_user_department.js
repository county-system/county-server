
exports.up = knex =>
  knex.schema
    .alterTable('users', table => {
      table.text('department').defaultTo('');
    });

exports.down = knex =>
  knex.schema
    .alterTable('users', table => {
      table.dropColumn('department');
    });


