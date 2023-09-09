import express from 'express';
import statisticApiCallMiddleware from '../utils/middlewares/statisticApiCall.js';
import { RESOURCE_NAME } from '../utils/constants.js';
import students from '../utils/datas/students.js';
import {
  deleteDataById,
  getDataAll,
  getDataById,
  postData,
  putDataById
} from '../utils/helpers/apiMenthod.js';

const router = express.Router();

router.use(statisticApiCallMiddleware(RESOURCE_NAME.STUDENT));

router.get('/', getDataAll(students));
router.get('/:id', getDataById(students));
router.post('/', postData(students));
router.put('/:id', putDataById(students));
router.delete('/:id', deleteDataById(students));

export default router;
