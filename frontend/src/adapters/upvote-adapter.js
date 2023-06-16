import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
} from "../utils";

// Router.get("/upvote/:user_id/:post_id", upvoteController.find);
// Router.get("/post/upvote/:post_id", upvoteController.listFromPost);
// Router.get("/user/upvote/:user_id", upvoteController.listFromUser);
// Router.delete("/post/upvote/:post_id", upvoteController.removeAllFromPost);
// Router.delete("/user/upvote/:user_id", upvoteController.removeAllFromUser);

const baseUrl = `/api/upvote`;

export const toggleUpvote = async (user_id, post_id) => {
  const exists = await fetchHandler(`${baseUrl}/${user_id}/${post_id}`);
  return exists
    ? await fetchHandler(`${baseUrl}/${user_id}/${post_id}`, deleteOptions)
    : await fetchHandler(`${baseUrl}/${user_id}/${post_id}`, getPostOptions());
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
