const listFromPost = async (req, res) => {
  const {
    db: { Upvote },
    params: { post_id },
  } = req;
  const upvote = await Upvote.listFromPost(post_id);
  res.send(upvote);
};

module.exports = listFromPost;
