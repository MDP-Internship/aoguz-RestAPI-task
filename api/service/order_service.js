const Order = require('../model/Order')

class OrderService {
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
