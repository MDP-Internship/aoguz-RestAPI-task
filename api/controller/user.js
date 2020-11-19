const { count } = require('../model/User.js')
const Users = require('../model/User.js')

class UserController {
  static async getUserCont(req, res, next) {
    Users.find({}, function (err, user) {
      res.send(user)
    })
  }

  static async postUserCont(req, res, next) {
    const postUsers = await Users({
      name: req.body.name,
      surname: req.body.surname,
      orders: req.body.orders,
    })

    postUsers
      .save()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        console.log('post işlemi sırasında hata çıktı hata kodu : ' + err)
      })
  }

  static async updateUserCont(req, res, next) {
    try {
      const updatedUser = await Users.updateOne(
        { _id: req.params.userId },
        { $set: { name: req.body.name } },
        { $set: { surname: req.body.surname } },
        {
          $set: {
            orders: [
              {
                $set: { count: req.body.orders.count },
                $set: { product: req.body.orders.product },
              },
            ],
          },
        }

        // orders kendi içinden mi güncelleniyor ??
      )
      res.json(updatedUser)
    } catch (error) {
      res.json({
        message: 'Güncelleme işlemi yapılırken hata oluştu',
        errorCode: error,
      })
    }
  }

  static async deleteUserCont(req, res, next) {
    try {
      const deletedUser = await Users.remove({ _id: req.params.userId })
      res.json(deletedUser)
    } catch (error) {
      res.json({
        message: 'Silme işlemi yapılırken hata oluştu',
        errorCode: error,
      })
    }
  }
}

module.exports = UserController
