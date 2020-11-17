const Order = require('../model/Order.js')

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
    const orderPost = new Order({
      count: req.body.count,
      product: [
        {
          /*   product_id: req.body.product.product_id, */
        },
      ],
    })

    orderPost
      .save()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.log('post işlemi ile ilgili hata var. Hata kodu : ' + error)
      })
  }

  static async updateOrderCont(req, res, next) {
    try {
      const updatedOrder = new Order.updateOne(
        { _id: req.params.orderId },

        { $set: { count: req.params.count } },
        {
          $set: {
            product: [
              {
                product_id: req.params.product.product_id,
              },
            ],
          },
        },

        res.json(updatedOrder)
      )
    } catch (error) {
      res.json({
        message: 'Silme işlemi yapılırken hata oluştu',
        errorCode: error,
      })
    }
  }
  static async deleteOrderCont(req, res, next) {
    try {
      const deletedOrder = new Order.remove({ _id: req.params.orderId })
      res.json(deletedOrder)
    } catch (error) {
      res.json({
        message: 'Silme işlemi yapılırken hata oluştu',
        errorCode: error,
      })
    }
  }
}
module.exports = OrderController
