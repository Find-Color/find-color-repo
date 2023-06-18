const create = async (req, res) => {
  const {
    session,
    db: { Comment },
    body: { post_id, user_id, comment_text },
  } = req;
  const comment = await Comment.create(post_id, user_id, comment_text);
  res.send(comment);
};

module.exports = create;


