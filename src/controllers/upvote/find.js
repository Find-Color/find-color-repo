const find = async (req, res) => {
  const {
    db: { Upvote },
    params: { user_id, post_id },
  } = req;
  try {
    const upvote = await Upvote.find(user_id, post_id);
    if (upvote === []) {
      return res.status(404).send(upvote);
    }
    res.send(upvote);
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = find;
