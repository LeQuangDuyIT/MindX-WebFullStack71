import express from 'express';
import teachers from '../utils/datas/teachers.js';
import statisticApiCallMiddleware from '../utils/middlewares/statisticApiCall.js';
import { RESOURCE_NAME } from '../utils/constants.js';
import {
  deleteDataById,
  getDataAll,
  getDataById,
  postData,
  putDataById
} from '../utils/helpers/apiMenthod.js';

const router = express.Router();

router.use(statisticApiCallMiddleware(RESOURCE_NAME.TEACHER));

router.get('/', getDataAll(teachers));
router.get('/:id', getDataById(teachers));
router.post('/', postData(teachers));
router.put('/:id', putDataById(teachers));
router.delete('/:id', deleteDataById(teachers));

export default router;
