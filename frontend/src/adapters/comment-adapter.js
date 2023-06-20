import { fetchHandler, getPostOptions, getPatchOptions , deleteOptions} from "../utils";

// Router.post("/comment", commentController.create);
// Router.get("/comments/:comment_id", commentController.find);
// Router.get("/posts/:post_id/comments", commentController.listFromPost);
// Router.get("/users/:user_id/comments", commentController.listFromUser);
// Router.patch("/comments/:comment_id", commentController.update);
// Router.delete("/posts/:post_id/comments", commentController.deleteAllFromPost);
// Router.delete("/users/:user_id/comments", commentController.deleteAllFromUser);

const baseUrl = "/api";

export const createComment = async body =>
  fetchHandler(`${baseUrl}/comment`, getPostOptions(body));

// eating errors here for simplicity
export const getAllCommentsFromPost = async post_id => {
  const [comments] = await fetchHandler(`${baseUrl}/posts/${post_id}/comments`);
  return comments || [];
};

export const getAllCommentsFromUser = async user_id => {
  const [comments] = await fetchHandler(`${baseUrl}/users/${user_id}/comments`);
  return comments || [];
};

export const updateComment = async (post_id, new_text) =>
  fetchHandler(`${baseUrl}/comments/${post_id}`, getPatchOptions(new_text));

export const deleteAllCommentsFromPost = async post_id => {
  const comments = await fetchHandler(
    `${baseUrl}/posts/${post_id}/comments`,
    deleteOptions
  );
  return comments;
};

export const deleteAllCommentsFromUser = async user_id => {
  const comments = await fetchHandler(
    `${baseUrl}/users/${user_id}/comments`,
    deleteOptions
  );
  return comments;
};
