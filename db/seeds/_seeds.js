const { faker } = require("@faker-js/faker");
faker.locale = "en";
const seed_number = process.env.SEEDS === undefined ? 25 : process.env.SEEDS;

module.exports = {
  faker,
  seed_number
};
