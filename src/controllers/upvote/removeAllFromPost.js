const removeAllFromPost = async (req, res) => {
  const {
    db: { Upvote },
    params: { post_id },
  } = req;
  const upvote = await Upvote.removeAllFromPost(post_id);
  res.send(upvote);
};

module.exports = removeAllFromPost;
