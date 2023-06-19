const listFromPost = async (req, res) => {
  const {
    params: { post_id },
    db: { Comment },
  } = req;
  try {
    const comments = await Comment.listFromPost(post_id);
    if (comments) return res.status(200).send(comments);
    return res.status(500).json({ error: "Unable to fetch comments" });
  } catch (error) {
    console.log(error);
    return null;
  }

  // try {
  //   const comment = await Comment.find(comment_id);
  //   if (comment) return res.status(200).send(comment);
  //   return res.status(404).json({ error: "Comment not found" });
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
};

module.exports = listFromPost;
