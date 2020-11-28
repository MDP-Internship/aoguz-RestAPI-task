const {
  userAdd,
  deleteUser,
  aggregateUser,
  userGet,
  findByDayNumber,
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

  static async findDayById(req, res, next) {
    try {
      const mount = parseInt(req.params.dayNumber)

      const ordersSort = await findByDayNumber(mount)

      console.log(ordersSort)
    } catch (err) {
      res.json({
        message: 'Ay değişkenine göre arama işleminde hata oluştu',
        errorCode: err,
      })
    }
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
