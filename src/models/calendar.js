const Model = require('./_model');
const knex = require('../../db/db');

class Calendar extends Model {

  static get tableName() {
    return 'calendar';
  }

  async $indexForSearch() {
    return null;
  }

  static get relationMappings() {
    return {};
  }

  static get modifiers() {
    return {};
  }

}

Calendar.knex(knex);
module.exports = Calendar;
