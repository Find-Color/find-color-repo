/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    table.increments("comment_id");
    table.integer("post_id").references("post_id").inTable("posts");
    table.integer("user_id").references("user_id").inTable("users");
    table.string("comment_text");
    table.timestamp("created_at");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {

};
