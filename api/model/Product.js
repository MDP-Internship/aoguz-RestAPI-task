import mongoose, { model } from 'mongoose'

const productSchema = mongoose.Schema({
  id: {
    type: String,
  },
  productInfo: {
    type: String,
    required: true,
  },
})

export default model('Product', productSchema)
