

const { Bookmark } = require('../db/models/bookmarks'); 


async function createBookmark(req, res) {
  const { user_id, post_id } = req.body;

  try {
    const bookmark = await Bookmark.createBookmark(user_id, post_id);
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
