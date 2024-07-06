import jwt from 'jsonwebtoken'
import keys from '../common/entorn.variable.js';

export const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) return res.status(401).json({ message: "unauthorized" })
        const payload = jwt.verify(authorization, keys.jwt_secret)
        req.user = payload;
        return next()
    } catch (error) {
        return res.status(401).json({ message: 'unauthorized' })
    }
}