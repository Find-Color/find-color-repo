const createBookmark = require("./createBookmark");
const getAllBookmarksFromUser = require("./getAllBookmarksFromUser");
const getBookmarksFromPost = require("./getBookmarksFromPost");
const getBookmarkCountForPosts = require("./getBookmarkCountForPosts");
const remove = require("./deleteBookmark");

module.exports = {
  createBookmark,
  getAllBookmarksFromUser,
  getBookmarksFromPost,
  getBookmarkCountForPosts,
  remove,
};
