import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

// Router.post("/bookmarks", bookmarksController.createBookmark);
// Router.get("/users/:user_id/bookmarks", bookmarksController.getAllBookmarksFromUser);
// Router.get("/posts/:post_id/bookmarks", bookmarksController.getBookmarksFromPost);
// Router.get("/bookmark-counts", bookmarksController.getBookmarkCountForPosts);
// Router.delete("/bookmarks/:user_id/:post_id", bookmarksController.remove);

export const createBookmark = async body =>
  fetchHandler(`/api/bookmarks`, getPostOptions(body));

export const getAllBookmarksFromPost = async post_id => {
  const [bookmarks] = await fetchHandler(`/api/posts/${post_id}/bookmarks`);
  return bookmarks || [];
};

export const findBookmark = async (user_id, post_id) => {
  const { bookmarks } = await getAllBookmarksFromPost(post_id);
  return bookmarks.length && bookmarks.some(mark => mark.user_id == user_id);
};

export const getAllBookmarksFromUser = async user_id => {
  const [bookmarks] = await fetchHandler(`/api/users/${user_id}/bookmarks`);
  return bookmarks || [];
};

export const deleteBookmark = async (user_id, post_id) => {
  const result = await fetchHandler(
    `/api/bookmarks/${user_id}/${post_id}`,
    deleteOptions
  );
  return result;
};
