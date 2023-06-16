const express = require("express");
const checkAuthentication = require("./middleware/check-authentication");
const addModels = require("./middleware/add-models");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const upvoteController = require("./controllers/upvote");
const upvoteController = require("./controllers/upvote");

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
Router.get("/upvote/post/:post_id", upvoteController.listFromPost);
Router.get("/upvote/user/:user_id", upvoteController.listFromUser);
Router.delete("/upvote/:user_id/:post_id", upvoteController.remove);
Router.delete("/upvote/post/:post_id", upvoteController.removeAllFromPost);
Router.delete("/upvote/user/:user_id", upvoteController.removeAllFromUser);

module.exports = Router;
