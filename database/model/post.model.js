
import sequelize, { DataTypes } from "sequelize";
import DB from "../connection.js";
import UserModel from "./user.model.js";

DB.sync().then(() => {
    console.log("comments model created")
})
const postModel = DB.define("posts", {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    isDeleted: {
        type: sequelize.BOOLEAN
    }
})



export default postModel