import Order from '../model/Order'

class OrderController {
  static async getOrderCont(req, res, next) {
    Order.find({}, (err, order) => {
      res.send(order)
    })
  }

  static async postOrderCont(req, res, next) {
    const orderPost = new Order({
      product: req.body.product,
      count: req.body.count,
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
      const updatedOrder = new Order.findOne(
        { _id: req.params.orderId },
        { $set: { product: req.params.product } },
        { $set: { count: req.params.count } },
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
export default OrderController
