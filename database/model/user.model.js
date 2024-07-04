import { DataTypes } from "sequelize";
import DB from "../connection.js";
import postModel from "./post.model.js";

DB.sync().then(() => {
    console.log("users model created")
})

const UserModel = DB.define("users", {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})



    export default UserModel 

