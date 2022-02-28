
exports.up = knex =>
  knex.schema
    .createTable('calendar', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('title').notNullable();
      table.boolean('is_all_day').notNullable().defaultTo(false);
      table.boolean('is_read_only').notNullable().defaultTo(false);
      table.text('start');
      table.text('end');
      table.text('category');
      table.text('due_date_class');
      table.text('color');
      table.text('bg_color');
      table.text('drag_bg_color');
      table.text('border_color');
      table.text('location');
      table.text('calendar_id');
      table.timestamps();
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('calendar');

