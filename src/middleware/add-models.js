const User = require("../db/models/user");
const Post = require("../db/models/post");
const Upvote = require("../db/models/upvote");
const Comment = require("../db/models/comment");
const Bookmark = require("../db/models/bookmarks");

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Upvote,
    Comment,
    Bookmark,
  };
  next();
};

module.exports = addModels;
