const User = require('../model/User.js')
const { count } = require('../model/User.js')
const { userAdd } = require('../service/user_service')
const { isUserInfoValidation } = require('../utils/validate.js')

class UserController {
  static async getUserCont(req, res, next) {
    Users.find({}, function (err, user) {
      res.json(user)
    })
  }
  static async totalUserCont(req, res, next) {
    User.aggregate(
      [
        ,/* { $unwind: '$orders' },
        {
          $group: {
            _id: '$orders._id',
            total: { $sum: '$orders.count' },
          },
        }, */
      ],
      function (err, response) {
        console.log(response)
      }
    )

    /*  User.count(
      {
        'orders.count': '$orders.count',
      },
      function (err, number) {
        console.log(number)
      }
    ) */
  }

  static async postUserCont(req, res, next) {
    const { name, surname, orders } = req.body
    const reqFullBody = req.body
    const isUserInfoValidationResult = isUserInfoValidation(reqFullBody)

    if (!isUserInfoValidationResult.res) {
      const userResult = await userAdd(name, surname, orders)
      res.json(userResult)
    } else {
      res.send(isUserInfoValidationResult.error)
    }
  }

  static async deleteUserCont(req, res, next) {
    try {
      const deletedUser = await User.remove({ _id: req.params.userId })
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
