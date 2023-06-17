const User = require("../db/models/user");
const Post = require("../db/models/post");
const Upvote = require("../db/models/upvote")

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Upvote
  };
  next();
};

module.exports = addModels;
