const { idGenerator, idGenRemoval } = require('../id_generator');

exports.up = knex =>
  knex.schema
    .raw(idGenerator)
    .createTable('users', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('email').unique().index();
      table.text('username').unique().index();
      table.text('hash');
      table.text('last_seen');
      table.text('last_ip');
      table.jsonb('metadata');
      table.text('private'),
      table.text('profile_uri'),
      table.text('invite_code'),
      table.text('location'),
      table.text('contact_number'),
      table.text('gender'),
      table.timestamps();
    })
    .createTable('groups', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('name');
      table.text('slug');
      table.text('description');
      table.jsonb('metadata');
      table.timestamps();
    })
    .createTable('group_members', table => {
      table.text('user_id').references('users');
      table.text('group_id').references('groups');
      table.primary(['user_id', 'group_id']);
      table.timestamps();
    })
    .createTable('group_permissions', table => {
      table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
      table.text('group_id').references('groups');
      table.text('resource');
      table.text('action');
      table.text('attributes');
      table.timestamps();
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('groups')
    .dropTableIfExists('group_members')
    .dropTableIfExists('group_permissions')
    .raw(idGenRemoval);
