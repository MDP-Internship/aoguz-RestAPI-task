const mongoose = require('mongoose')
const orderModel = require('../model/Order.js')

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  /* orders: orderModel, */
})

module.exports = mongoose.model('User', userSchema)
