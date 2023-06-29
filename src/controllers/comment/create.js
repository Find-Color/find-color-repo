const create = async (req, res) => {
  const {
    session,
    db: { Comment, Bookmark },
    body: { post_id, user_id, comment_text },
  } = req;

  const comment = await Comment.create(post_id, user_id, comment_text);

  
  const bookmarks = await Bookmark.getBookmarksFromPost(post_id);

  
  bookmarks.forEach((bookmark) => {
    req.io.to(bookmark.user_id).emit('newComment', comment);
  });

  res.send(comment);
};

module.exports = create;
