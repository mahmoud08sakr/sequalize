import { Router } from 'express';
import { getAllUsers, logout, signIn, signUp } from './user.controller.js';
import postModel from '../../../database/model/post.model.js';
import CommentModel from '../../../database/model/commentModel.js';
import UserModel from '../../../database/model/user.model.js';
const router = Router();

router.get('/getAllUsers', getAllUsers)
router.post('/signUp', signUp)
router.post('/signIn', signIn)
router.get('/logout', logout)
router.get('/user/:id', async (req, res) => {

    const user = await UserModel.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'name', 'email'],
        include: [
            {
                model: postModel,
                attributes: ['id', 'title', 'content'],
                include: [
                    {
                        model: CommentModel,
                        attributes: ['id', 'content'],
                    },
                ],
            },
        ],
    })
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(500).json({ message: 'Internal server error' })

})




export default router