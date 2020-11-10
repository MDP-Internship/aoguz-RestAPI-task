import Order from "../model/Order";

class OrderController {
  static async getOrderCont(req, res, next) {
    Order.find({}, (err, order) => {
      res.send(order);
    });
  }

  static async postOrderCont(req, res, next) {
    const orderPost = new Order({
      shippingType: req.body.shippingType,
      shippingAdress: req.body.shippingAdress,
    });

    orderPost
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("post işlemi ile ilgili hata var. Hata kodu : " + err);
      });
  }
}
