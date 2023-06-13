/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
   knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("image").notNullable().unique();
    table.timestamps(true, true);
    table.string("location");
    table.integer("coverage_score");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("users");
