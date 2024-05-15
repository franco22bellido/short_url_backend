import { Router } from 'express'
import { craeteUrl, getUrls, getByShortUrl, deleteUrl,  } from '../controllers/url.controller.js'
const router = Router()

router.get('/', getUrls)
router.get('/:shortUrl', getByShortUrl)
router.post('/', craeteUrl)
router.delete('/:id', deleteUrl)

export default router;
