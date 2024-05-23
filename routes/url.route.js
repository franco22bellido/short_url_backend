import { Router } from 'express'
import { craeteUrl, getUrls, getByShortUrl, deleteUrl,  } from '../controllers/url.controller.js'
import { validateToken } from '../middlewares/jwt.middleware.js'

const router = Router()

router.get('/', validateToken , getUrls)
router.get('/:shortUrl', getByShortUrl)
router.post('/',validateToken , craeteUrl)
router.delete('/:id',validateToken , deleteUrl)

export default router;
