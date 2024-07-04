import sequelize from "sequelize";


const DB = new sequelize("sequalize", "root", "", {
    host: "localhost",
    dialect: "mysql"
})



DB.authenticate().then(() => console.log("connected")).catch((err) => console.log(err))

export default DB