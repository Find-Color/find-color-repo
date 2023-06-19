const deleteAllFromPost = async (req, res) => {
  const {
    db: { Comment },
    params: { post_id },
  } = req;
  const comment = await Comment.deleteAllFromPost(post_id);
  res.send(comment);
};

module.exports = deleteAllFromPost;
