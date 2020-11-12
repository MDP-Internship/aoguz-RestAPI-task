import mongoose, { model } from 'mongoose'
import moduleName from '../model/Product'
const orderScheme = mongoose.Schema([
  {
    id: {
      type: String,
    },
    product: {
      moduleName,
    },
    count: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
])

export default model('Order', orderScheme)
