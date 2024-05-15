import mongoose from 'mongoose'

const connection = mongoose.connect('mongodb://127.0.0.1:27017/short_url_express')
.then(()=> {
    console.log("db is connected")
})
.catch((e)=> {
    console.log(e)
})
export default connection;