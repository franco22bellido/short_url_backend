import express from 'express';
import cookieParser from 'cookie-parser';
import urlRoutes from './routes/url.route.js'
import userRoutes from './routes/user.route.js'
import {validateToken} from './middlewares/jwt.middleware.js';
import './db.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/url', validateToken, urlRoutes)
app.use('/auth', userRoutes)


app.listen(3000, ()=>{ 
    console.log('server on port 3000')
})