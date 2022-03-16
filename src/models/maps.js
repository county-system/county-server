const Model = require("./_model");
const knex = require("../../db/db");

class Maps extends Model {

  static get tableName() {
    return "map";
  }

  async $indexForSearch() {
    return null;
  }


  static get modifiers() {
    return {};
  }

}

Maps.knex(knex);
module.exports = Maps;
