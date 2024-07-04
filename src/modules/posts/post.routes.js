import { Router } from 'express';
import { createPost, deletePost, getPosts, isDeleted, updatePost } from './post.controller.js';

const router = Router();

router.get('/getAllPosts', getPosts)
router.post('/createPost', createPost)
router.put('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)
router.delete('/isDeleted/:id', isDeleted)

export default router



