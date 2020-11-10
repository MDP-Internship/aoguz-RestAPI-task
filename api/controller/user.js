import Users from "../model/User";

class UserController {
  static async getUserCont(req, res, next) {
    Users.find({}, function (err, user) {
      res.send(user);
    });
  }

  static async postUserCont(req, res, next) {
    const postUsers = new Users({
      name: req.body.name,
      date: req.body.date,
      total_order_count: req.body.total_order_count,
      orders: orderModel,
    });

    postUsers
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("post işlemi sırasında hata çıktı hata kodu : " + err);
      });
  }
}

export default UserController;
