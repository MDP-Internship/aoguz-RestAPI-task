const Product = require('../model/Product')

class ProductService {
  static async productAdd(product_info) {
    const product = new Product({
      product_info: product_info,
    })
    await product.save().then().catch()
    return product
  }
  static async productFindById(product_id) {
    const productID = await Product.findById(product_id)
    return productID
  }

  static async deleteProduct(product_id) {
    const removeProduct = await Product.deleteOne({ _id: product_id })
    return removeProduct
  }
}
module.exports = ProductService
