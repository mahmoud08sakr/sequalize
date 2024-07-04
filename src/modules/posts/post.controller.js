import postModel from '../../../database/model/post.model.js';

export const getPosts = async (req, res) => {
    let data = await postModel.findAll({})
    res.json(data)
}

export const createPost = async (req, res) => {
    let { title, content, author } = req.body
    let data = await postModel.create({ title, content, author })
    if (data) {
        res.json({ message: "post created successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const updatePost = async (req, res) => {
    let { id } = req.params
    let data = await postModel.update(req.body, { where: { id } })
    if (data) {
        res.json({ message: "post updated successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const deletePost = async (req, res) => {
    let { id } = req.params
    let data = await postModel.destroy({ where: { id } })
    if (data) {
        res.json({ message: "post deleted successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const isDeleted = async (req, res) => {
    let { id } = req.params
    let data = await postModel.update({ isDeleted: true }, { where: { id } })
    if (data) {
        res.json({ message: "comment soft deleted successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}