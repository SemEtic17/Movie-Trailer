import express from 'express';
import { getmovies, } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/getmovies', getmovies)


export default router;