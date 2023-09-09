import express from 'express';
import systemRouter from './symstem.route.js';
import studentRouter from './student.route.js';
import apiKeyCheckerMiddleware from '../utils/middlewares/apiKeyChecker.js';
import logRequestMiddleware from '../utils/middlewares/logRequest.js';

const router = express.Router();

router.use('/symstem/statistic', systemRouter);

router.use(logRequestMiddleware);
router.use(apiKeyCheckerMiddleware);
router.use('/students', studentRouter);

export default router;
