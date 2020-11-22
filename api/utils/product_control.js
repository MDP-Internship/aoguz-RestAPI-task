const Product = require('../model/Product')
const Orderr = require('../model/Order')
var ObjectId = require('mongodb').ObjectId

const mongoose = require('mongoose')

module.exports = async function isHaveProduct(product) {
  console.log(typeof product._id)

  doc = new ObjectId(product._id)

  idd = product._id

  var id = mongoose.ObjectId.cast(product._id)
  console.log(typeof id)
  try {
    const result = await Product.aggregate([
      {
        $project: {
          send_id_type: typeof doc,
          send_id: doc,

          result: {
            $in: [doc, []],
          },
        },
      },
    ])
    console.log(result)
  } catch (err) {
    throw err
  }
}
