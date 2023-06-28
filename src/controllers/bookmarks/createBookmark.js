
async function createBookmark(req, res) {
  const { user_id, post_id } = req.body;

  // Add the db object to the destructuring assignment
  const {db: {Bookmark}} = req;

  try {
    const bookmark = await db.Bookmark.createBookmark(user_id, post_id);
    if (bookmark) {
      return res.status(201).json({ success: true, bookmark });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to create bookmark' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = createBookmark;
