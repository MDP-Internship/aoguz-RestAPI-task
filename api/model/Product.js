const mongoose = require('mongoose')

const productShema = new mongoose.Schema([
  {
    product_info: {
      type: String,
    },
  },
])

module.exports = mongoose.model('Product', productShema)
