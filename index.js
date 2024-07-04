import express, { json } from 'express'
import userRouter from "./src/modules/user/user.routes.js"
import postRouters from "./src/modules/posts/post.routes.js"
import commentRouter from "./src/modules/comments/comment.routes.js"

const app = express()
const port = 3000

app.use(json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', postRouters)
app.use('/api/v1/comment', commentRouter)

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))