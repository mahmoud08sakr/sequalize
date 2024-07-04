import { Router } from 'express';
import { createComment, deleteComment, getComments, updateComment } from './comment.controller.js';

const router = Router();


router.post('/createComment', createComment)
router.get('/getComments', getComments)
router.put('/updateComment/:id', updateComment)
router.delete('/deleteComment/:id', deleteComment)

export default router
