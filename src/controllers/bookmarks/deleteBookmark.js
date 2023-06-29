
async function remove(req, res) {
  const { user_id, post_id } = req.params;

  // Add the db object to the destructuring assignment
  const {db: {Bookmark} } = req;

  try {
    const isDeleted = await db.Bookmark.remove(user_id, post_id);
    if (isDeleted) {
      return res.json({ success: true, message: 'Bookmark deleted successfully' });
    } else {
      return res.status(404).json({ success: false, message: 'Bookmark not found' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = remove;
