export default (req, res, next) => {
  const API_KEY = process.env.API_KEY;

  if (req.body && req.query.key === API_KEY) {
    next();
    return;
  }

  res.sendStatus(401);
};
