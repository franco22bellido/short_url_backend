import jwt from 'jsonwebtoken'
import keys from '../common/entorn.variable.js';

export const validateToken = (req, res, next) => {
    const { token } = req.cookies;

    try {
        if (!token) return res.status(403).json({ message: "unauthorized" })
        const payload = jwt.verify(token, keys.jwt_secret)
        req.user= payload;
        return next()
    } catch (error) {
        return res.status(403).json('unauthorized')
    }
}