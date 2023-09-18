import express from 'express';
import authenRouter from './authen.route.js'
import postRouter from './post.route.js'
import authMiddleware from '../middleware/auth.mdw.js';

const router = express.Router()

router.use('/authen', authenRouter)
router.use('/post', authMiddleware, postRouter)

export default express