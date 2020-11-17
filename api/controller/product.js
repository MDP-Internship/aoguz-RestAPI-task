const Product = require('../model/Product.js')
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
    const product = new Product({
      product_id: req.body.product_id,
      product_info: req.body.product_info,
    })
    product
      .save()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        console.log('post işlemi ile ilgili hata var. Hata kodu : ' + err)
      })
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
