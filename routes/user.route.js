import { Router } from 'express'
import { createUser, getAllUsers, login, validateSession } from '../controllers/user.controller.js'
import { validateToken } from '../middlewares/jwt.middleware.js'

const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/validate', validateToken , validateSession)



export default router;
