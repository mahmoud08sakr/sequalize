import UserModel from "../../../database/model/user.model.js"
import bcrypt from 'bcrypt'


export const getAllUsers = async (req, res) => {
    let data = await UserModel.findAll({})
    res.json(data)
}


export const signUp = async (req, res) => {
    let { name, email, password } = req.body
    let hashedPassword = await bcrypt.hash(password, 10)
    let data = await UserModel.create({ name, email, password: hashedPassword })
    if (data) {
        res.json({ message: "user created successfully" })
    } else {
        res.json({ message: "something went wrong" })
    }
}

export const signIn = async (req, res) => {
    let { email, password } = req.body
    let data = await UserModel.findOne({ where: { email } })
    console.log(data);
    if (data && await bcrypt.compareSync(password, data.password)) {
        res.json(data)
    }else{
        res.json({message:"user not found"})
    }
}

export const logout = async (req, res) => {
    res.json({ message: "logout successfully" })
}