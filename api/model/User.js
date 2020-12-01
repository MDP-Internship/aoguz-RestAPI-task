const mongoose = require('mongoose')
const orderModel = require('../model/Order.js')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  orders: [],
})

module.exports = mongoose.model('User', userSchema)
