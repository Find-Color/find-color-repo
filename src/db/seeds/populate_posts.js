/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      name: "name",
      location: "location",
      status: "status",
      date_reported: "5/23/23",
      hair: "hair",
      height: "height",
      eye_color: "eye-color",
      weight: "weight",
      race: "race",
      ethnicity: "ethnicity",
      gender: "gender",
      age: 1,
      image: "image",
      description_text: "description_text",
      contact_info: "contact_info",
      user_id: 1,
    },
  ]);
};
