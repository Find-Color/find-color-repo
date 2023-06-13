/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
  return knex.schema.createTable("posts", table => {
    table.increments("post_id");
    table.string("name");
    table.string("location");
    table.string("status");
    table.date("date_reported");
    table.timestamp("created_at");
    table.string("hair");
    table.string("height");
    table.string("eye-color");
    table.string("weight");
    table.string("race");
    table.string("ethnicity");
    table.string("gender");
    table.integer("age");
    table.string("image");
    table.integer("user_id").references("user_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("posts");
