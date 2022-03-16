const { faker } = require("../_seeds");
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("groups").del();

  const permissions = [
    {
      id: "groupAdmin",
      name: "admin",
      slug: "role-admin",
      description: "Administrator",
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    },
    {
      id: "groupUser",
      name: "user",
      slug: "role-user",
      description: "User",
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    },
    {
      id: "groupModerator",
      name: "moderator",
      slug: "role-moderator",
      description: "Moderator",
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    },
    {
      id: "groupSuperAdmin",
      name: "superAdmin",
      slug: "role-super-admin",
      description: "Super Administrator",
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    },
    {
      id: "groupBasic",
      name: "basic",
      slug: "role-basic",
      description: "Basic",
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    },
  ];
  return knex("groups").insert(permissions);
};
