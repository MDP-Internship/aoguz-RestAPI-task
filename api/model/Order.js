const mongoose = require('mongoose')
const productShema = require('../model/Product.js')
const orderScheme = mongoose.Schema({
  id: {
    type: String,
  },

  count: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Order', orderScheme)
