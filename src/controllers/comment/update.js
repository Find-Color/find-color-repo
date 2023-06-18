const update = async (req, res) => {
    const { commentId } = req.params;
    const { newText } = req.body;
  
    try {
      const comment = await Comment.find(commentId);
      comment.update(newText);
      res.status(200).json(comment);
    } catch (error) {
      res.status(404).json({ error: 'Comment not found' });
    }
  };

  module.exports = update;