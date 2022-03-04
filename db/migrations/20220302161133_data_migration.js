
exports.up = knex =>
  knex.schema
    .createTable('kpi', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('department').notNullable().defaultTo('general');
      table.text('indicators');
      table.text('unit');
      table.text('baseline_year');
      table.text('baseline_value');
      table.jsonb('financial_year');
      table.text('actual_achievement');
      table.timestamps();
    })
    .createTable('map', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('department').notNullable().defaultTo('general');
      table.text('name_of_project');
      table.text('gps_reading');
      table.text('project_cost');
      table.text('ward');
      table.text('site');
      table.text('contracted_company');
      table.text('project_start_date');
      table.text('expected_date_of_completion');
      table.text('payment_done_to_date');
      table.text('outstanding_amount');
      table.text('level_of_completion');
      table.text('is_project_in_use').notNullable().defaultTo('no');
      table.text('remarks');
      table.text('type');
      table.text('name');
      table.boolean('active').notNullable().defaultTo(false);
      table.text('lat');
      table.text('lng');
      table.timestamps();
    }).createTable('project', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('project_name');
      table.text('implementing_entity');
      table.jsonb('financial_year');
      table.text('sub_county');
      table.text('ward');
      table.text('project_status');
      table.text('project_cost');
      table.timestamps();
    });



exports.down = knex =>
  knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('kpi')
    .dropTableIfExists('map');

