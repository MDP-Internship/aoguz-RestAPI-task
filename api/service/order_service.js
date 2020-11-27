const { date } = require('joi')
const { where } = require('../model/Order')
const Order = require('../model/Order')

class OrderService {
  static async orderGet() {
    const getOrder = await Order.find({})
    return getOrder
  }
  static async findByOrderId(id) {
    const findOrder = await Order.findById(id)
    return findOrder
  }

  static async findByMountNumber(mountt) {
    const ordersSort = await Order.aggregate([
      { $unwind: '$product' },
      {
        $project: {
          product: '$product._id',
          count: '$product.count',
          day: { $dayOfMonth: '$date' },
        },
        $match: { day: 23 },
      },
    ])
    return ordersSort
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
