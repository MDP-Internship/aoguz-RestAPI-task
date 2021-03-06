const { count } = require('../model/Order.js')
const Order = require('../model/Order.js')
const Product = require('../model/Product.js')
const User = require('../model/User')
const mongoose = require('mongoose')
const { isUser, isHaveProduct } = require('../utils/helpers')
const { isOrderValidation } = require('../utils/validate')
const {
  add,
  orderGet,
  findByOrderId,
  findByDayNumber,
} = require('../service/order_service.js')

class OrderController {
  // tüm orderları getirir
  static async getOrderCont(req, res, next) {
    const orderGetResult = await orderGet()
    res.json(orderGetResult)
  }

  //id ye göre arama
  static async findOrderById(req, res, next) {
    try {
      const findOrder = await findByOrderId(req.params.mountNumber)
      res.json(findOrder)
    } catch (err) {
      res.json({
        message: "ID' ye göre arama işleminde hata oluştu",
        errorCode: err,
      })
    }
  }

  static async findDayById(req, res, next) {
    try {
      const day = parseInt(req.params.dayNumber)

      const ordersSort = await findByDayNumber(day)

      console.log(ordersSort)
    } catch (err) {
      res.json({
        message: 'Ay değişkenine göre arama işleminde hata oluştu',
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
