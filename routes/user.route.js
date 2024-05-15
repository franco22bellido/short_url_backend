import { Router } from 'express'
import {createUser, getAllUsers, login} from '../controllers/user.controller.js'

const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.post('/', getAllUsers)


export default router;
