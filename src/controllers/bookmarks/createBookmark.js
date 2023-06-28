
const createBookmark = async (req, res) => {
  const {
    db: {Bookmark},
    body: { user_id, post_id },
  } = req;

  try {
    const bookmark = await Bookmark.createBookmark(user_id, post_id);
    if (bookmark) {
      return res.status(201).send({ success: true, bookmark });
    } else {
      return res
        .status(500)
        .send({ success: false, message: "Failed to create bookmark" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
}

module.exports = createBookmark;
