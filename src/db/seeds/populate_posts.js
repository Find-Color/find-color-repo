/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      name: "Juan Rodriguez",
      location: "Miami, Florida",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Black",
      height: "5'10''",
      eye_color: "Brown",
      weight: "170 lbs",
      race: "Latino",
      ethnicity: "Hispanic",
      gender: "Male",
      age: 30,
      image: "image",
      description_text:
        "Juan Rodriguez went missing on May 23, 2023. He has black hair, brown eyes, and weighs approximately 170 lbs. He is 5'10'' tall and is of Latino descent. If you have any information regarding his whereabouts, please contact the authorities.",
      contact_info: "Contact the local police department at (555) 123-4567",
      user_id: 5,
    },

    {
      name: "Maria Hernandez",
      location: "Los Angeles, California",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Dark brown",
      height: "5'6\"",
      eye_color: "Brown",
      weight: "140 lbs",
      race: "Latina",
      ethnicity: "Mexican",
      gender: "Female",
      age: 28,
      image: "image",
      description_text:
        "Maria Hernandez is a Latina female who has been reported missing since May 23, 2023. She has dark brown hair that falls past her shoulders and captivating brown eyes. Maria stands at a height of 5 feet 6 inches and weighs approximately 140 pounds. As a Latina of Mexican descent, she has a beautiful complexion and features that reflect her heritage. Maria is a 28-year-old woman. Any information regarding her whereabouts should be reported to the provided contact information.",
      contact_info:
        "If you have any information regarding Maria Hernandez's disappearance, please contact the local authorities at [contact_info].",
      user_id: 2,
    },

    {
      name: "Linda Nguyen",
      location: "San Francisco, California",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Black",
      height: "5'2\"",
      eye_color: "Brown",
      weight: "110 lbs",
      race: "Asian",
      ethnicity: "Vietnamese",
      gender: "Female",
      age: 32,
      image: "image",
      description_text:
        "Linda Nguyen is an Asian female who has been reported missing since May 23, 2023. She has beautiful black hair that is usually styled in a shoulder-length bob. Linda has enchanting brown eyes that reflect her vibrant personality. She stands at a height of 5 feet 2 inches and has a slender build, weighing approximately 110 pounds. As an Asian woman of Vietnamese ethnicity, Linda has a graceful appearance and features that reflect her cultural background. Linda is 32 years old. If you have any information regarding her whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Linda Nguyen's disappearance, please contact the local authorities at [contact_info].",
      user_id: 1,
    },

    {
      name: "Satoshi Tanaka",
      location: "Brooklyn, New York",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Black",
      height: "5'9\"",
      eye_color: "Brown",
      weight: "160 lbs",
      race: "Asian",
      ethnicity: "Japanese",
      gender: "Male",
      age: 42,
      image: "image",
      description_text:
        "Satoshi Tanaka is an Asian male who has been reported missing since May 23, 2023. He has sleek black hair that is neatly combed and brown eyes that convey a sense of depth. Satoshi stands at a height of 5 feet 9 inches and has a well-built physique, weighing approximately 160 pounds. As an Asian man of Japanese ethnicity, Satoshi possesses distinct features that reflect his cultural heritage. He is 42 years old and was last seen in Tokyo, Japan. If you have any information regarding Satoshi's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Satoshi Tanaka's disappearance, please contact the local authorities at [contact_info].",
      user_id: 3,
    },

    {
      name: "Malik Johnson",
      location: "Chicago, Illinois",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Shaved",
      height: "6'2",
      eye_color: "Brown",
      weight: "180 lbs",
      race: "Black",
      ethnicity: "African American",
      gender: "Male",
      age: 25,
      image: "image",
      description_text:
        "Malik Johnson is a Black male who has been reported missing since May 23, 2023. He has a clean-shaven head and striking brown eyes that convey a sense of intensity. Malik stands tall at a height of 6 feet 2 inches and has a muscular build, weighing approximately 180 pounds. As a Black man of African American descent, Malik possesses distinct features that reflect his cultural background. He is 25 years old and was last seen in Chicago, Illinois. If you have any information regarding Malik's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Malik Johnson's disappearance, please contact the local authorities at [contact_info].",
      user_id: 5,
    },

    {
      name: "Aisha Williams",
      location: "Atlanta, Georgia",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Curly",
      height: "5'5\"",
      eye_color: "Brown",
      weight: "150 lbs",
      race: "Black",
      ethnicity: "African American",
      gender: "Female",
      age: 35,
      image: "image",
      description_text:
        "Aisha Williams is a Black female who has been reported missing since May 23, 2023. She has luscious curly hair that frames her face beautifully and captivating brown eyes. Aisha stands at a height of 5 feet 5 inches and has a curvaceous figure, weighing approximately 150 pounds. As a Black woman of African American descent, Aisha possesses distinct features that reflect her cultural heritage. She is 35 years old and was last seen in Atlanta, Georgia. If you have any information regarding Aisha's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Aisha Williams' disappearance, please contact the local authorities at [contact_info].",
      user_id: 2,
    },
  ]);
};
