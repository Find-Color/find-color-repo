/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
  return knex.schema.createTable("posts_demographics", table => {
    table.integer("post_id").references("post_id").inTable("posts");
    table.string("race");
    table.string("ethnicity");
    table.string("gender");
    table.integer("age");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("posts_demographics");
