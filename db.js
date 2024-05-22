import mongoose from 'mongoose'
import keys from './common/entorn.variable.js'

const connection = mongoose.connect(keys.mongo_uri, { ssl: true})
    .then(() => {
        console.log("db is connected")
    })
    .catch((e) => {
        console.log(e)
    })
export default connection;