const Users = require('../model/User')

class UserService {
  static async userAdd(name, surname, orders) {
    const postUsers = new Users({
      name: name,
      surname: surname,
      orders: orders,
    })

    await postUsers.save().then().catch()

    return postUsers
  }

  static async deleteUser(user_id) {
    const deletedUser = await Users.remove({ _id: req.params.userId })
    return deletedUser
  }
}

module.exports = UserService
