import {Schema, model} from "mongoose";

const urlSchema = new Schema({
    url: String,
    shortUrl: String,
    clicks: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Url = model('Url',urlSchema)
export default Url