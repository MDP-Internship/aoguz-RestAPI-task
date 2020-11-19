const mongoose = require('mongoose')

const productShema = new mongoose.Schema([
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    product_info: {
      type: String,
    },
  },
])

module.exports = mongoose.model('Product', productShema)
