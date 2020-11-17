const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
  _id: false,
  product_id: {
    type: String,
  },
  product_info: {
    type: String,
  },
})

module.exports = mongoose.model('Product', productShema)
