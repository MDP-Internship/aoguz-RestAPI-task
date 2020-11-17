const mongoose = require('mongoose')
const orderModel = require('../model/Order.js')

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  orders: [mongoose.model('Order').schema],
})

module.exports = mongoose.model('User', userSchema)
