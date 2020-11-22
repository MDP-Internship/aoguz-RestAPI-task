const express = require('express')

const router = express.Router()
const OrderController = require('../controller/order.js')
router.get('/', OrderController.getOrderCont)
router.get('/search/:orderId', OrderController.findOrderById)
router.post('/', OrderController.postOrderCont)

module.exports = router
