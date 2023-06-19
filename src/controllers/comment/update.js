const update = async (req, res) => {
  const {
    params: { comment_id },
    db: { Comment },
    body: { new_text },
  } = req;

  try {
    const comment = await Comment.find(comment_id);
    comment.update(new_text);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Comment not found" });
  }
};

module.exports = update;
