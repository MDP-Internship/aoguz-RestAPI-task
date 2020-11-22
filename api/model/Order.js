const mongoose = require('mongoose')
const productShema = require('../model/Product.js')
const orderSchema = new mongoose.Schema({
  count: {
    type: Number,
  },
  product: [],
  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Order', orderSchema)
