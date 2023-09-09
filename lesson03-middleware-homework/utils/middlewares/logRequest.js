const logRequestMiddleware = (req, res, next) => {
  console.log(req.path);
  next();
};

export default logRequestMiddleware;
