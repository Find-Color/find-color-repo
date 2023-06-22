const express = require("express");
const checkAuthentication = require("./middleware/check-authentication");
const addModels = require("./middleware/add-models");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const upvoteController = require("./controllers/upvote");
const commentController = require("./controllers/comment");
const bookmarksController = require('../controllers/bookmarks');


const Router = express.Router();
Router.use(addModels);

Router.get("/users", userController.list);
Router.post("/users", userController.create);
Router.get("/users/:id", userController.show);
// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.update);

Router.post("/login", userController.login);
Router.delete("/logout", userController.logout);
Router.get("/me", userController.showMe);

Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

//POSTS
Router.post("/post", postController.create);
Router.get("/posts", postController.list);
Router.get("/users/:id/posts", postController.listFromUser);
Router.get("/post/:id", postController.find);
Router.patch("/post/:id", postController.updatePost);
Router.delete("/post/:id", postController.deletePost);

//UPVOTES
Router.post("/upvote/:user_id/:post_id", upvoteController.add);
Router.get("/upvote/:user_id/:post_id", upvoteController.find);
Router.get("/post/upvote/:post_id", upvoteController.listFromPost);
Router.get("/user/upvote/:user_id", upvoteController.listFromUser);
Router.delete("/upvote/:user_id/:post_id", upvoteController.remove);
Router.delete("/post/upvote/:post_id", upvoteController.removeAllFromPost);
Router.delete("/user/upvote/:user_id", upvoteController.removeAllFromUser);

//COMMENTS
Router.post("/comment", commentController.create);
Router.get("/comments/:comment_id", commentController.find);
Router.get("/posts/:post_id/comments", commentController.listFromPost);
Router.get("/users/:user_id/comments", commentController.listFromUser);
Router.patch("/comments/:comment_id", commentController.update);
Router.delete("/posts/:post_id/comments", commentController.deleteAllFromPost);
Router.delete("/users/:user_id/comments", commentController.deleteAllFromUser);

//BOOKMARKS
Router.post("/bookmarks",bookmarksController.createBookmark );
Router.get("/users/:user_id/bookmarks", bookmarksController.getAllBookmarksFromUser);
Router.get('/posts/:post_id/bookmarks', bookmarksController.getBookmarksFromPost);
Router.get('/bookmark-counts', bookmarksController.getBookmarkCountForPosts);
Router.delete("/bookmarks/:user_id/:post_id", bookmarksController.remove );

module.exports = Router;
