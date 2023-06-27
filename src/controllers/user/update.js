const { isAuthorized } = require("../../utils/auth-utils");

const updateUser = async (req, res) => {
  const {
    session,
    db: { User },
    params: { user_id },
    body: { username },
  } = req;
  console.log(req.params);

  if (!isAuthorized(user_id, session)) return res.sendStatus(403);

  const user = await User.find(user_id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.update(username);
  res.send(updatedUser);
};

module.exports = updateUser;
