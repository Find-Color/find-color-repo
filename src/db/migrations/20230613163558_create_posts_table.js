/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("posts", (table) => {
    table.increments("post_id");
    table.string("name");
    table.string("location");
    table.string("location_state");
    table.string("status");
    table.date("date_reported");
    table.timestamps(true, true);
    table.string("hair");
    table.integer("height");
    table.string("eye_color");
    table.integer("weight");
    table.string("ethnicity");
    table.string("gender");
    table.integer("age");
    table.string("image_post");
    table.text("description_text");
    table.string("contact_info");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("posts");
