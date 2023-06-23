/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("bookmarks", (table) => {
    table.increments("bookmark_id").primary();
    table.integer("post_id").unsigned();
    table.integer("user_id").unsigned();
     table.foreign("post_id").references("post_id").inTable("posts");
    table.foreign("user_id").references("user_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("bookmarks");
};
