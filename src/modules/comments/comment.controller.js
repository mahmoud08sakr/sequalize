import CommentModel from '../../../database/model/commentModel.js';

export const createComment = async (req, res) => {
    let { content, postId, userId } = req.body
    let data = await CommentModel.create({ content, postId, userId })
    if (data) {
        res.json({ message: "comment created successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const getComments = async (req, res) => {
    let data = await CommentModel.findAll({})
    res.json(data)
}

export const updateComment = async (req, res) => {
    let { id } = req.params
    let data = await CommentModel.update(req.body, { where: { id } })
    if (data) {
        res.json({ message: "comment updated successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const deleteComment = async (req, res) => {
    let { id } = req.params
    let data = await CommentModel.destroy({ where: { id } })
    if (data) {
        res.json({ message: "comment deleted successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

