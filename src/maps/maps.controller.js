const log = require("../utils/logger");
const Maps = require("../models/maps");

async function getMaps(ctx) {

  try {
    let maps = await Maps.query();
    ctx.assert(maps, 404, "No User With that username");
    log.info(`maps.length: ${maps.length}`);
    ctx.body = { maps: maps };
  } catch (e) {
    if (e.statusCode) {
      ctx.throw(e.statusCode, { message: "The query key does not exist" });
    } else { ctx.throw(406, null, { errors: [e.message] }); }
  }
}

module.exports = {
  getMaps
};
