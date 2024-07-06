import express from 'express';
import cookieParser from 'cookie-parser';
import urlRoutes from './routes/url.route.js'
import userRoutes from './routes/user.route.js'
import { config } from 'dotenv'
import keys from './common/entorn.variable.js';
import cors from 'cors'
import './db.js'
config()


const app = express();
app.use(cors({ credentials: true, origin: [keys.front_origin] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res)=> {
    res.send("hello world")
})
app.use('/url', urlRoutes)
app.use('/auth', userRoutes)

app.listen(keys.port, () => {
    console.log(`SERVER ON PORT ${keys.port}`)
})