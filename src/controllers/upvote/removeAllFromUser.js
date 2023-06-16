const removeAllFromUser = async (req, res) => {
  const {
    db: { Upvote },
    params: { user_id },
  } = req;
  const upvote = await Upvote.removeAllFromUser(user_id);
  res.send(upvote);
};

module.exports = removeAllFromUser;
