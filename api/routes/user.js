import { Router } from 'express'
import UserController from '../controller/user'
const router = Router()

router.get('/', UserController.getUserCont)
router.post('/', UserController.postUserCont)
router.patch('/:userId', UserController.updateUserCont) // patch güncelleme işlemi yapar.
router.delete('/:userId', UserController.deleteUserCont)

export default router
