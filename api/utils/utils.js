const User = require('../model/User')
const Product = require('../model/Product')
var ObjectId = require('mongodb').ObjectId

exports.isUser = async function isUser(id) {
  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const result = await User.findById(id)

      if (result) {
        console.log('id ler doğru')
        return {
          res: true,
          message: 'user found',
          user: result,
        }
      } else {
        console.log('idler doğru değil')
        return {
          res: false,
          message: 'user not found',
        }
      }
    } else {
      console.log('girilen id objectID tipinde değil')
    }
  } catch (error) {
    throw error
  }
}

exports.isHaveProduct = async function isHaveProduct(product) {
  /*   console.log(typeof product._id)

  doc = new ObjectId(product._id)
  console.log('object ' + doc)
  idd = product._id

  var id = mongoose.ObjectId.cast(product._id)

  console.log(typeof id)
   */
  const newArrr = product.map((item) => ObjectId(item._id))

  try {
    const result = await Product.find({
      _id: { $in: newArrr },
    })

    if (result) {
      console.log('sorgulanan ürün Product tablosunda mevcut')
      return {
        res: true,
        product: result,
      }
    } else {
      console.log('Product tablosunda ürün yok')
      return {
        res: false,
        message: 'Product tablosunda ürün yok',
      }
    }
  } catch (err) {
    throw err
  }
}
