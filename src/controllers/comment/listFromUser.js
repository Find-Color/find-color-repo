const listFromUser = async (req, res) => {
  const {
    params: { user_id },
    db: { Comment },
  } = req;

  try {
    const comments = await Comment.listFromUser(user_id);
    if (comments) return res.status(200).send(comments);
    return res.status(500).json({ error: "Unable to fetch comments" });
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = listFromUser;
