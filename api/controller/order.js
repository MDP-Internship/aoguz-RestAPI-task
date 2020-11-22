const { count } = require('../model/Order.js')
const Order = require('../model/Order.js')
const Product = require('../model/Product.js')
const User = require('../model/User')
const isUser = require('../utils/utils')
const isHaveProduct = require('../utils/product_control')

class OrderController {
  // tüm orderları getirir

  static async getOrderCont(req, res, next) {
    Order.find({}, (err, order) => {
      res.send(order)
    })
  }

  //id ye göre arama
  static async findOrderById(req, res, next) {
    try {
      const findOrder = await Order.findById(req.params.orderId)
      res.json(findOrder)
    } catch (err) {
      res.json({
        message: "ID' ye göre arama işleminde hata oluştu",
        errorCode: err,
      })
    }
  }

  static async postOrderCont(req, res, next) {
    const { user_id, product } = req.body

    const isUserResult = await isUser(user_id)
    if (isUserResult.res) {
      /*  console.log(isUserResult.user) */
    } else {
      console.log('girmedi')

      res.json({
        message: isUserResult.message,
      })
    }

    isHaveProduct(product[0])
    console.log('PRODUCT : ' + product[0]._id)
  }
}

module.exports = OrderController
