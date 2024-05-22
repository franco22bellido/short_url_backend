import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.mdel.js';
import keys from '../common/entorn.variable.js';

export const createUser = async (req, res) => {
    const { username, name, password } = req.body;
    //validar si usario existe
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({
        username,
        name,
        passwordHash
    })
    const userSaved = await newUser.save();
    return res.status(200).json({ userSaved })
}
export const login = async (req, res) => {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username }).lean()
    if (!userFound) return res.status(404).json({ message: "incorrect credentials" })

    const isValidPassword = await bcrypt.compare(password, userFound.passwordHash)
    if (!isValidPassword) return res.status(404).json({ message: "incorrect credentials" })

    const payload = { userId: userFound._id, username: userFound.username }

    const token = jwt.sign(payload, keys.jwt_secret, { expiresIn: "24h" })
    res.cookie('token', token, {
        sameSite: "none",
        secure: true
    })

    return res.status(200).json({
        "message": "login sussefully",
        "token": token,
    })
}
export const getAllUsers = async (req, res) => {
    const users = await User.find({})
    return res.json(users)
}
export const validateSession = async (req, res) => {
    return res.status(200).json({
        user: req.user
    })
}
