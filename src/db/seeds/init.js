const User = require("../models/user");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async knex => {
  await User.deleteAll();
  await User.create("Ben1010", "123");
  await User.create("LinseyLL", "123");
  await User.create("CJ00", "123");
  await User.create("GuyFerrawri", "123");
  await User.create("Devon", "123");
};
