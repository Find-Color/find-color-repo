const create = require("./create");
const find = require("./find");
const list = require("./listAll");
const listFromPost = require("./listFromPost");
const listFromUser = require("./listFromUser");
const update = require("./update");
const deleteAllFromPost = require("./deleteAllFromPost");
const deleteAllFromUser = require("./deleteAllFromUser");

module.exports = {
  create,
  find,
  list,
  listFromPost,
  listFromUser,
  update,
  deleteAllFromPost,
  deleteAllFromUser,
};
