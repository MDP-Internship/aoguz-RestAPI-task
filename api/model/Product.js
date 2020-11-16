const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
  id: {
    type: String,
  },
  productInfo: {
    type: String,
  },
})

module.exports = mongoose.model('Product', productShema)
