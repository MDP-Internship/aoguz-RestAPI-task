const mongoose = require('mongoose')
const productShema = require('../model/Product.js')
const orderSchema = new mongoose.Schema({
  id: {
    type: String,
  },

  count: {
    type: String,
  },
  product: [mongoose.model('Product').schema],
  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Order', orderSchema)
