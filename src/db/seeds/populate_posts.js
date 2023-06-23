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
      location: "Miami",
      location_state: "Florida",
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
      image_post: "image_post",
      description_text:
        "Juan Rodriguez went missing on May 23, 2023. He has black hair, brown eyes, and weighs approximately 170 lbs. He is 5'10'' tall and is of Latino descent. If you have any information regarding his whereabouts, please contact the authorities.",
      contact_info: "Contact the local police department at (555) 123-4567",
      user_id: 5,
    },

    {
      name: "Maria Hernandez",
      location: "Los Angeles",
      location_state: "California",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Dark brown",
      height: "5'6\"",
      eye_color: "Brown",
      weight: "140 lbs",
      ethnicity: "Latino/Hispanic",
      gender: "Female",
      age: 28,
      image_post: "image_post",
      description_text:
        "Maria Hernandez is a Latina female who has been reported missing since May 23, 2023. She has dark brown hair that falls past her shoulders and captivating brown eyes. Maria stands at a height of 5 feet 6 inches and weighs approximately 140 pounds. As a Latina of Mexican descent, she has a beautiful complexion and features that reflect her heritage. Maria is a 28-year-old woman. Any information regarding her whereabouts should be reported to the provided contact information.",
      contact_info:
        "If you have any information regarding Maria Hernandez's disappearance, please contact the local authorities at [contact_info].",
      user_id: 2,
    },

    {
      name: "Linda Nguyen",
      location: "San Francisco",
      location_state: "California",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Black",
      height: "5'2\"",
      eye_color: "Brown",
      weight: "110 lbs",
      ethnicity: "Asian",
      gender: "Female",
      age: 32,
      image_post: "image_post",
      description_text:
        "Linda Nguyen is an Asian female who has been reported missing since May 23, 2023. She has beautiful black hair that is usually styled in a shoulder-length bob. Linda has enchanting brown eyes that reflect her vibrant personality. She stands at a height of 5 feet 2 inches and has a slender build, weighing approximately 110 pounds. As an Asian woman of Vietnamese ethnicity, Linda has a graceful appearance and features that reflect her cultural background. Linda is 32 years old. If you have any information regarding her whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Linda Nguyen's disappearance, please contact the local authorities at [contact_info].",
      user_id: 1,
    },

    {
      name: "Satoshi Tanaka",
      location: "Brooklyn",
      location_state: "New York",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Black",
      height: "5'9\"",
      eye_color: "Brown",
      weight: "160 lbs",
      ethnicity: "Asian",
      gender: "Male",
      age: 42,
      image_post: "image_post",
      description_text:
        "Satoshi Tanaka is an Asian male who has been reported missing since May 23, 2023. He has sleek black hair that is neatly combed and brown eyes that convey a sense of depth. Satoshi stands at a height of 5 feet 9 inches and has a well-built physique, weighing approximately 160 pounds. As an Asian man of Japanese ethnicity, Satoshi possesses distinct features that reflect his cultural heritage. He is 42 years old and was last seen in Tokyo, Japan. If you have any information regarding Satoshi's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Satoshi Tanaka's disappearance, please contact the local authorities at [contact_info].",
      user_id: 3,
    },

    {
      name: "Malik Johnson",
      location: "Chicago",
      location_state: "Illinois",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Shaved",
      height: "6'2",
      eye_color: "Brown",
      weight: "180 lbs",
      ethnicity: "Black/African American",
      gender: "Male",
      age: 25,
      image_post: "image_post",
      description_text:
        "Malik Johnson is a Black male who has been reported missing since May 23, 2023. He has a clean-shaven head and striking brown eyes that convey a sense of intensity. Malik stands tall at a height of 6 feet 2 inches and has a muscular build, weighing approximately 180 pounds. As a Black man of African American descent, Malik possesses distinct features that reflect his cultural background. He is 25 years old and was last seen in Chicago, Illinois. If you have any information regarding Malik's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Malik Johnson's disappearance, please contact the local authorities at [contact_info].",
      user_id: 5,
    },

    {
      name: "Aisha Williams",
      location: "Atlanta",
      location_state: "Georgia",
      status: "Missing",
      date_reported: "5/23/23",
      hair: "Curly",
      height: "5'5\"",
      eye_color: "Brown",
      weight: "150 lbs",
      ethnicity: "Black/African American",
      gender: "Female",
      age: 35,
      image_post: "image_post",
      description_text:
        "Aisha Williams is a Black female who has been reported missing since May 23, 2023. She has luscious curly hair that frames her face beautifully and captivating brown eyes. Aisha stands at a height of 5 feet 5 inches and has a curvaceous figure, weighing approximately 150 pounds. As a Black woman of African American descent, Aisha possesses distinct features that reflect her cultural heritage. She is 35 years old and was last seen in Atlanta, Georgia. If you have any information regarding Aisha's whereabouts, please contact the local authorities using the provided contact information.",
      contact_info:
        "If you have any information regarding Aisha Williams' disappearance, please contact the local authorities at [contact_info].",
      user_id: 2,
    },
    {
      name: "Samantha Thompson",
      location: "Los Angeles",
      location_state: "California",
      status: "Missing",
      date_reported: "6/12/23",
      hair: "Black",
      height: "5'3\"",
      eye_color: "Brown",
      weight: "120 lbs",
      ethnicity: "Indigenous American/Alaska Native",
      gender: "Female",
      age: 16,
      image_post: "https://example.com/samantha_thompson.jpg",
      description_text:
        "My heart aches as I write this. My precious daughter Samantha has gone missing, and I am filled with worry and fear. Samantha, a beautiful black girl with curly black hair and warm brown eyes, disappeared on June 12, 2023, in our hometown of Los Angeles. She is 5 feet 3 inches tall, weighs around 120 pounds, and has a radiant smile that can light up a room. Samantha is the light of our lives, always full of joy and kindness. She loves spending time with her friends and has a passion for painting and dancing. As her mother, I can't bear the thought of her being out there somewhere, scared and alone. We desperately need your help to bring Samantha back home. If you have any information about her whereabouts, no matter how small, please contact the local authorities immediately. Our family is praying for her safe return. Samantha, if you can hear me, please know that we love you beyond words and we will never give up searching for you.",
      contact_info:
        "If you have any information regarding Samantha's disappearance, please contact the Los Angeles Police Department at (555) 987-6543.",
      user_id: 3,
    },
    {
      name: "Aaradhya Patel",
      location: "Chicago",
      location_state: "Illinois",
      status: "Missing",
      date_reported: "6/14/23",
      hair: "Black",
      height: "5'4\"",
      eye_color: "Hazel",
      weight: "110 lbs",
      ethnicity: "Asian",
      gender: "Female",
      age: 15,
      image_post: "https://example.com/aaradhya_patel.jpg",
      description_text:
        "We are deeply distressed to report the disappearance of Aaradhya Patel, a 15-year-old Indian girl with hazel eyes and black hair. Aaradhya went missing on June 14, 2023, in Chicago, Illinois. She is approximately 5 feet 4 inches tall and weighs about 110 pounds. Aaradhya possesses a passion for classical Indian dance and a remarkable aptitude for mathematics. Her absence has left us devastated, and we plead for your assistance in locating her. If you have any information about Aaradhya's whereabouts, please contact the Chicago Police Department immediately at (555) 123-4567. Your cooperation is greatly appreciated in helping us reunite our family and bring Aaradhya back safely.",
      contact_info:
        "If you have any information regarding Aaradhya's disappearance, please contact the Chicago Police Department at (555) 123-4567.",
      user_id: 4,
    },
    {
      name: "Nathan Redwolf",
      location: "Tucson",
      location_state: "Arizona",
      status: "Missing",
      date_reported: "6/14/23",
      hair: "Black",
      height: "6'0\"",
      eye_color: "Brown",
      weight: "180 lbs",
      ethnicity: "Indigenous American/Alaska Native",
      gender: "Male",
      age: 24,
      image_post: "https://example.com/nathan_redwolf.jpg",
      description_text:
        "We are deeply concerned about the disappearance of Nathan Redwolf, a 24-year-old Native American male hailing from the Navajo tribe. Nathan was last seen on June 14, 2023, in Tucson, Arizona. He stands at a height of 6 feet, weighs approximately 180 pounds, and has striking black hair and brown eyes that reflect both wisdom and determination. Nathan possesses a strong connection to his Native American heritage and is deeply rooted in his community. He has a passion for traditional Navajo arts and crafts and has showcased his talent through beautiful handcrafted jewelry and pottery. Nathan's disappearance has left us in a state of distress, and we urge anyone with information to come forward. If you have any information about Nathan's whereabouts, please contact the local authorities immediately. Our family and community are devastated by his absence, and we long for his safe return. Nathan, if you can hear this plea, know that we love you and are doing everything in our power to find you and bring you back home.",
      contact_info:
        "If you have any information regarding Nathan's disappearance, please contact the Tucson Police Department at (555) 987-6543.",
      user_id: 1,
    },
    {
      name: "Ji-hoon Kim",
      location: "Columbus",
      location_state: "Ohio",
      status: "Missing",
      date_reported: "6/14/23",
      hair: "Black",
      height: "5'2\"",
      eye_color: "Brown",
      weight: "100 lbs",
      ethnicity: "Hawaiian/Pacific Islander",
      gender: "Male",
      age: 13,
      image_post: "https://example.com/jihoon_kim.jpg",
      description_text:
        "We are deeply concerned for the welfare of Ji-hoon Kim, a 13-year-old Korean male who has gone missing. Ji-hoon was last seen on June 14, 2023, in Columbus, Ohio. He has black hair, brown eyes, and stands at a height of 5 feet 2 inches. Ji-hoon has a slender build and weighs approximately 100 pounds. He is a bright and curious young boy who excels academically and has a passion for mathematics and music. Ji-hoon is cherished by his family and friends, and his absence has left us devastated. We are reaching out to the community for any information that may lead to his safe return. If you have seen Ji-hoon or have any details regarding his whereabouts, please contact the Columbus Police Department without delay. Our hearts ache for Ji-hoon, and we pray for his swift reunion with his loved ones. Ji-hoon, if you can hear us, please know that we love you dearly and are doing everything we can to bring you back home.",
      contact_info:
        "If you have any information regarding Ji-hoon's disappearance, please contact the Columbus Police Department at (555) 123-4567.",
      user_id: 5,
    },
  ]);
};
