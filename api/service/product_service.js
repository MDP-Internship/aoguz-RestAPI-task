const Product = require('../model/Product')

class ProductService {
  static async productAdd(product_info) {
    const product = new Product({
      product_info: product_info,
    })
    await product.save().then().catch()
    return product
  }
}
module.exports = ProductService
