const add = async (req, res) => {
  const {
    session,
    db: { Upvote },
    params: { user_id, post_id },
  } = req;
  const upvote = await Upvote.add(user_id, post_id);
  res.send(upvote);
}; 

module.exports = add;
