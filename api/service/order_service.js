const Order = require('../model/Order')

class OrderService {
  static async orderGet() {
    const getOrder = await Order.find({})
    return getOrder
  }
  static async findByOrderId(id) {
    const findOrder = await Order.findById(req.params.orderId)
    return findOrder
  }

  static add(userID, product) {
    const orderPost = new Order({
      user_id: userID,
      product: product,
    })
    orderPost.save().then().catch()
    return orderPost
  }
}

module.exports = OrderService
