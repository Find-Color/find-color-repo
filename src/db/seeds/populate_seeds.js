/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("comments").insert([
    { post_id: 1, user_id: 1, comment_text: "should work" },
    { post_id: 2, user_id: 1, comment_text: "should work" },
    { post_id: 3, user_id: 1, comment_text: "should work" },
  ]);
};
