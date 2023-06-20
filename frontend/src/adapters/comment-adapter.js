import {
    fetchHandler,
    getPostOptions,
    getPatchOptions,
    deleteOptions,
  } from "../utils";
  
//   Router.post("/comment", commentController.create);
//   Router.get("/comments/:comment_id", commentController.find);
//   Router.get("/posts/:post_id/comments", commentController.listFromPost);
//   Router.get("/users/:user_id/comments", commentController.listFromUser);
//   Router.patch("/comments/:comment_id", commentController.update);
//   Router.delete("/posts/:post_id/comments", commentController.deleteAllFromPost);
//   Router.delete("/users/:user_id/comments", commentController.deleteAllFromUser);
  
  const baseUrl = `/api`;
  
  export const createComment = async ({ commentText, post_id, id  }) => {
    fetchHandler(`${baseUrl}/comments`, getPostOptions({ commentText, post_id, id }))
  };
  
  export const getAllUpvotesFromPost = async post_id => {
    const [upvotes] = await fetchHandler(`/post/upvote/${post_id}`);
    return upvotes || [];
  };
  
  export const getAllUpvotesFromUser = async user_id => {
    const [upvotes] = await fetchHandler(`/user/upvote/${user_id}`);
    return upvotes || [];
  };
  
  export const deleteAllUpvotesFromPost = async post_id => {
    const upvotes = await fetchHandler(`/post/upvote/${post_id}`, deleteOptions);
    return upvotes;
  };
  
  export const deleteAllUpvotesFromUser = async user_id => {
    const upvotes = await fetchHandler(`/user/upvote/${user_id}`, deleteOptions);
    return upvotes;
  };
  