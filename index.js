import express from 'express';
import cookieParser from 'cookie-parser';
import urlRoutes from './routes/url.route.js'
import userRoutes from './routes/user.route.js'
import {config} from 'dotenv'
import keys from './common/entorn.variable.js';
import {validateToken} from './middlewares/jwt.middleware.js';
import cors from 'cors'
import './db.js'
config()

console.log(keys)
const app = express();
app.use(cors({credentials: true, origin: [keys.front_origin]}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/url', validateToken, urlRoutes)
app.use('/auth', userRoutes)


app.listen(keys.port, ()=>{ 
    console.log(`SERVER ON PORT ${keys.port}`)
})