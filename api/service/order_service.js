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

  static async findByMountNumber(dayNumber) {
    const ordersSort = await Order.aggregate([
      { $unwind: '$product' },
      {
        $project: {
          _id: '$_id',
          product: '$product',
          countt: '$product.count',
          days: { $dayOfMonth: '$date' },
        },
      },

      { $match: { days: dayNumber } },

      {
        $group: {
          _id: {
            order_id: '$_id',
            day: '$days',
          },

          total_count: { $sum: '$product.count' },
        },
      },

      {
        $sort: { total_count: -1 },
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
