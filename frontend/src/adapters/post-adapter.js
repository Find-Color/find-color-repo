import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

// Router.get("/posts", postController.list);
// Router.get("/users/:id/posts", postController.listFromUser);
// Router.get("/post/:id", postController.find);
// Router.post("/post", postController.create);
// Router.delete("/post/:id", postController.deletePost);

const baseUrl = "/api";

export const createPost = async body =>
  fetchHandler(`${baseUrl}/post`, getPostOptions(body));

// eating errors here for simplicity
export const getAllPosts = async () => {
  const [posts] = await fetchHandler(`${baseUrl}/posts`);
  return posts || [];
};

export const getPost = async id => fetchHandler(`${baseUrl}/post/${id}`);

export const updatePost = async (post_id, newData) =>
  fetchHandler(`${baseUrl}/post/${post_id}`, getPatchOptions(newData));
