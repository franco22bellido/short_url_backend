import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    url: String,
    shortUrl: String,
    clicks: Number,
    created_at: { type: Date, required: true, default: Date.now },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Url = model('Url', urlSchema)
export default Url