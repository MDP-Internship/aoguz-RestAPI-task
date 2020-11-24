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
}

module.exports = UserService
