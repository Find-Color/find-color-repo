const find = async (req, res) => {
  const {
    params: { comment_id },
    db: { Comment },
  } = req;
  try {
    const comment = await Comment.find(comment_id);
    if (comment) return res.status(200).send(comment);
    return res.status(404).json({ error: "Comment not found" });
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = find;
