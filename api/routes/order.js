import { Router } from 'express'
import OrderController from '../controller/order'
const router = Router()

router.get('/', (req, res, next) => {
  res.send('merhaba')
})
router.post('/', OrderController.postOrderCont)
router.patch('/:orderId', OrderController.updateOrderCont)
router.delete('/:orderId', OrderController.deleteOrderCont)

export default router
