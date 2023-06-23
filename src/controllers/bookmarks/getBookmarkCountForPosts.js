async function getBookmarkCountForPosts(req, res) {
    try {
      const bookmarkCounts = await Bookmark.getBookmarkCountForPosts();
      return res.json({ success: true, bookmarkCounts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
  
  module.exports = getBookmarkCountForPosts;