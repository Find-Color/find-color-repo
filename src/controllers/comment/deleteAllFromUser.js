const deleteAllFromUser = async (req, res) => {
  const {
    db: { Comment },
    params: { user_id },
  } = req;
  const comment = await Comment.deleteAllFromUser(user_id);
  res.send(comment);
};

module.exports = deleteAllFromUser;
