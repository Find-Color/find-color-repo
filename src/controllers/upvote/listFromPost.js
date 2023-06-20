const listFromPost = async (req, res) => {
  const {
    db: { Upvote },
    params: { post_id },
  } = req;
  const upvote = await Upvote.listFromPost(post_id);
  console.log("controller", upvote);
  res.send(upvote);
};

module.exports = listFromPost;
