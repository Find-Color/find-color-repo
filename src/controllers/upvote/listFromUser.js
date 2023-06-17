const listFromUser = async (req, res) => {
  const {
    db: { Upvote },
    params: { user_id },
  } = req;
  const upvote = await Upvote.listFromUser(user_id);
  res.send(upvote);
};

module.exports = listFromUser;
