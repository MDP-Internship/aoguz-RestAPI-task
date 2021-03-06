const Product = require('../model/Product.js')
const {
  productAdd,
  productFindById,
  deleteProduct,
  getProduct,
} = require('../service/product_service')
const { isProductValidation } = require('../utils/validate')
class ProductController {
  //tüm ürünleri getirir
  static async getProductCont(req, res, next) {
    const getProducts = await getProduct()
    res.json(getProducts)
  }

  //idye göre arama
  static async findProductById(req, res, next) {
    try {
      const productId = req.params.productId
      var findProduct = productFindById(productId)
      res.json(findProduct)
    } catch (err) {
      res.json({
        message: "ID' ye göre arama işleminde hata oluştu",
        errorCode: err,
      })
    }
  }

  static async postProductCont(req, res, next) {
    const { product_info } = req.body
    const isProductValidationResult = isProductValidation(product_info)

    if (isProductValidationResult.res) {
      const productResult = await productAdd(product_info)
      res.json(productResult)
    } else {
      res.send(isProductValidationResult.err)
    }
  }

  static async updateProductCont(req, res, next) {
    try {
      const updatedProduct = await Product.updateOne(
        { product_id: req.params.product_id },
        { $set: { product_info: req.body.product_info } }
      )
      res.json(updatedProduct)
    } catch (err) {
      res.json({
        message: 'Güncelleme işlemi yapılırken hata oluştu',
        errorCode: err,
      })
    }
  }
  static async deleteProductCont(req, res, next) {
    try {
      const { product_id } = req.params.productId
      const deletedProduct = await deletedProduct(product_id)
      res.json(deletedProduct)
    } catch (error) {
      res.json({
        message: 'Silme işlemi yapılırken hata oluştu',
        errorCode: error,
      })
    }
  }
}
module.exports = ProductController
