const Product = require('../model/Product.js')
const { productAdd } = require('../service/product_service')
const { isProductValidation } = require('../utils/validate')
class ProductController {
  //tüm ürünleri getirir
  static async getProductCont(req, res, next) {
    Product.find({}, (err, product) => {
      //find {} ile tüm veriler üzerinde arama yapar.
      res.send(product)
    })
  }

  //idye göre arama
  static async findProductById(req, res, next) {
    try {
      var findProduct = await Product.findById(req.params.productId)
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
      const deletedProduct = await Product.deleteOne({
        _id: req.params.productId,
      })
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
