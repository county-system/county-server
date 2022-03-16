const Model = require("./_model");
const knex = require("../../db/db");

class Maps extends Model {

  static get tableName() {
    return "Maps";
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

Maps.knex(knex);
module.exports = Maps;
