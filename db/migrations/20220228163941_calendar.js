
exports.up = knex =>
  knex.schema
    .createTable('calendar', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('title').notNullable();
      table.boolean('isAllDay').notNullable().defaultTo(false);
      table.jsonb('start');
      table.jsonb('end');
      table.text('category');
      table.text('dueDateClass');
      table.text('color');
      table.text('bgColor'),
      table.text('dragBgColor'),
      table.text('borderColor'),
      table.text('location'),
      table.text('calendarId'),
      table.timestamps();
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('calendar');

