const { count } = require('../model/Order.js')
const Order = require('../model/Order.js')
const Product = require('../model/Product.js')
const User = require('../model/User')
const { isUser, isHaveProduct } = require('../utils/helpers')
const { isOrderValidation } = require('../utils/validate')
const { add } = require('../service/order_service.js')

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
    const isProductResult = await isHaveProduct(product)
    const isOrderValidationResult = await isOrderValidation(product)
    if (isUserResult.res) {
      console.log(isUserResult.user)
      /* console.log('girdiii') */
    } else {
      console.log('girmedi')

      res.json({
        message: isUserResult.message,
      })
    }
    if (isProductResult.res) {
      console.log(isProductResult.product)
    } else {
      console.log('product yok')
      res.json({
        message: isProductResult.message,
      })
    }
    if (isOrderValidationResult.res) {
      if (isUserResult.res && isProductResult.res) {
        console.log('son sorgu girdi')

        const orderPostResult = add(user_id, product)
        res.json(orderPostResult)

        await User.update(
          { _id: isUserResult.user._id },
          { $push: { orders: orderPostResult } }
        )
      }
    } else {
      res.send(isOrderValidationResult.err)
    }
  }
}

module.exports = OrderController
