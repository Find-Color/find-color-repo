const listAll = async (req, res) => {
  const { Post } = req.db;
  const posts = await Post.listAll();
  res.send(posts);
};

module.exports = listAll;
