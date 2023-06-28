
async function getBookmarkCountForPosts(req, res) {
  // Add the db object to the destructuring assignment
  const { db: {Bookmark} } = req;

  try {
    const bookmarkCounts = await db.Bookmark.getBookmarkCountForPosts();
    return res.json({ success: true, bookmarkCounts });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = getBookmarkCountForPosts;
