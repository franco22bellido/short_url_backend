import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    username: { type: String, unique: true },
    name: String,
    passwordHash: String,
    urls: [{
        type: Schema.Types.ObjectId,
        ref: 'url'
    }]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // returnedObject.id = returnedObject._id
        // delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = model('User', userSchema)
export default User
