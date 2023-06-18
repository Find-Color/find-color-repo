
const find = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.find(commentId);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ error: 'Comment not found' });
  }
};

module.exports = find;