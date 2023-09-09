import express from 'express';
import users from '../utils/datas/users.js';
import { RESOURCE_NAME } from '../utils/constants.js';

const router = express.Router();

export const userStatistic = users.map(user => ({
  id: user.apiKey,
  user: user.username,
  [RESOURCE_NAME.STUDENT]: 0,
  [RESOURCE_NAME.TEACHER]: 0,
  [RESOURCE_NAME.SUBJECT]: 0
}));

router.get('/', (_, res) => {
  res.json({ statistic: userStatistic });
});

export default router;
