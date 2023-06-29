
async function getBookmarksFromPost(req, res) {
  const { post_id } = req.params;

  // Add the db object to the destructuring assignment
  const {db: {Bookmark} } = req;

  try {
    const bookmarks = await Bookmark.getBookmarksFromPost(post_id);
    return res.json({ success: true, bookmarks });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = getBookmarksFromPost;
