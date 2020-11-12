const express = require('express')
const ProductController = require('../controller/product.js')
const router = express.Router()

router.get('/', ProductController.getProductCont)
router.post('/', ProductController.postProductCont)
router.patch('/:productId', ProductController.updateProductCont)
router.delete('/:productId', ProductController.deleteProductCont)

module.exports = router
