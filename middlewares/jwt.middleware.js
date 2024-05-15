import jwt from 'jsonwebtoken'

export const validateToken = (req, res, next) => {
    const { token } = req.cookies;

    try {
        if (!token) return res.status(403).json({ message: "unauthorized" })
        const payload = jwt.verify(token, 'secret')
        req.user= payload;
        return next()
    } catch (error) {
        return res.status(403).json('unauthorized')
    }
}