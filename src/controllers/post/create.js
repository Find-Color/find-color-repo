const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: {
      user_id,
      name,
      location,
      status,
      date_reported,
      hair,
      height,
      eye_color,
      weight,
      race,
      ethnicity,
      gender,
      age,
      image,
      description_text,
      contact_info,
    },
  } = req;
  const post = await Post.create(
    user_id,
    name,
    location,
    status,
    date_reported,
    hair,
    height,
    eye_color,
    weight,
    race,
    ethnicity,
    gender,
    age,
    image,
    description_text,
    contact_info
  );
  res.send(post);
};

module.exports = createPost;
