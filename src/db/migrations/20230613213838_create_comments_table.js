/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
  return knex.schema.createTable("comments", table => {
    table.increments("comment_id");
    table.integer("post_id"); //.references("post_id").inTable("posts");
    table.integer("user_id"); //.references("user_id").inTable("users");
    table.string("comment_text");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTableIfExists("comments");
