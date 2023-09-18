import { userStatistic } from '../../routes/symstem.route.js';

const statisticApiCallMiddleware = resourceName => {
  return (req, res, next) => {
    const { apiKey } = req.query;

    if (!apiKey) {
      return res.status(401).json({ message: 'Nhập thiếu API Key' });
    }

    const index = userStatistic.findIndex(user => user.id === apiKey);
    if (index === -1) {
      return res.status(401).json({ message: 'API Key không chính xác' });
    }

    const updatedCouter = userStatistic[index][resourceName] + 1;
    userStatistic[index] = { ...userStatistic[index], [resourceName]: updatedCouter };

    next();
  };
};

export default statisticApiCallMiddleware;
