import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password }) => (
  fetchHandler(baseUrl, getPostOptions({ username, password }))
);

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (user_id) => fetchHandler(`${baseUrl}/${user_id}`);

export const updateUsername = async ({ user_id, username }) => (
  fetchHandler(`${baseUrl}/${user_id}`, getPatchOptions({ user_id, username }))
);
