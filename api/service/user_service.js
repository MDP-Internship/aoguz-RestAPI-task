const Users = require('../model/User')

class UserService {
  static async userGet() {
    const userGet = await Users.find({})
    return userGet
  }

  static async userAdd(name, surname, orders) {
    const postUsers = new Users({
      name: name,
      surname: surname,
      orders: orders,
    })

    await postUsers.save().then().catch()

    return postUsers
  }
  static async findByAggerId(id) {
    const result = Users.findById(id)
    return result
  }

  static async deleteUser(user_id) {
    const deletedUser = await Users.remove({ _id: req.params.userId })
    return deletedUser
  }

  static async aggregateUser() {
    const aggeregatedUser = await Users.aggregate([
      { $unwind: '$orders' },

      {
        $project: {
          _id: '$_id',
          name: '$name',
          surname: '$surname',
          total: { $sum: '$orders.product.count' },
        },
      },
    ])

    return aggeregatedUser
  }
}

module.exports = UserService
