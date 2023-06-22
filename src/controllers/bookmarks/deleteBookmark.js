
async function remove(req, res) {
  const { user_id, post_id } = req.params;

  try {
    const isDeleted = await Bookmark.remove(user_id, post_id);
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
