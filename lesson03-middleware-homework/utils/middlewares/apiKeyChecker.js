import users from '../datas/users.js';

const apiKeyCheckerMiddleware = (req, res, next) => {
  const { apiKey } = req.query;

  if (!apiKey) {
    return res.status(401).json({ message: 'Nhập thiếu API Key' });
  }

  const index = users.findIndex(user => user.apiKey === apiKey);
  if (index === -1) {
    return res.status(401).json({ message: 'API Key của người dùng không chính xác' });
  }

  next();
};

export default apiKeyCheckerMiddleware;
