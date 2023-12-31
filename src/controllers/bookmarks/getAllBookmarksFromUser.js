async function getAllBookmarksFromUser(req, res) {
  const { user_id } = req.params;

  // Add the db object to the destructuring assignment
  const {
    db: { Bookmark },
  } = req;

  try {
    const bookmarks = await Bookmark.getAllBookmarksFromUser(user_id);
    return res.json({ success: true, bookmarks });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = getAllBookmarksFromUser;
