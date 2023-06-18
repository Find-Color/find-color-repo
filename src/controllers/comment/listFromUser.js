 const listFromUser = async (req, res) => { 
    const { user_id } = req.params;

    try {
      const comments = await Comment.listFromUser(user_id);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch comments' });
    }
 }

 module.exports = listFromUser;
 


  

