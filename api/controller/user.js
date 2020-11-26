const User = require('../model/User.js')
const { count, aggregate } = require('../model/User.js')
const {
  userAdd,
  deleteUser,
  aggregateUser,
  userGet,
} = require('../service/user_service')
const { isUserInfoValidation } = require('../utils/validate.js')

class UserController {
  static async getUserCont(req, res, next) {
    const aggerResult = await aggregateUser()
    const userGetResult = await userGet()
    res.json({
      user: userGetResult,
      total_orders: aggerResult,
    })
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
      const { user_id } = req.params.userId
      const deletedUser = deleteUser(user_id)
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
