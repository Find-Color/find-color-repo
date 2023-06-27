// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  console.log(req);
  const { userId } = req.session;
  console.log(req.session);
  if (!userId) return res.sendStatus(401);
  return next();
};

module.exports = checkAuthentication;
