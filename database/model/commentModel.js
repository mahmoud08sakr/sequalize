import { DataTypes } from "sequelize";
import DB from "../connection.js";
import UserModel from './user.model.js'
import postModel from './post.model.js'

const CommentModel = DB.define("comments", {
    content: {
        type: DataTypes.STRING
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: postModel,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel,
            key: 'id'
        }
    }
})

export default CommentModel
