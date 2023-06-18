const listFromPost = async (req, res) => { 
    const { post_id } = req.params;

    try {
      const comments = await Comment.listFromPost(post_id);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch comments' });
    }
 }

 module.exports = listFromPost;
 