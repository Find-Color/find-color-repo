const showUser = async (req, res) => {
  const {
    db: { User },
    params: { user_id },
  } = req;
  const user = await User.find(user_id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

module.exports = showUser;
