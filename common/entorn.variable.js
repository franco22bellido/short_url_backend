import {config } from 'dotenv'
config()
const keys = {
    jwt_secret: process.env.JWT_SECRET || 'secret_jwt',
    mongo_uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/short_url_express',
    port: process.env.PORT,
    front_origin : process.env.FRONT_ORIGIN || 'http://192.168.0.7:5173'
}

export default keys;