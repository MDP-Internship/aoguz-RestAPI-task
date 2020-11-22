const User = require('../model/User')
const Product = require('../model/Product')

module.exports = async function isUser(id) {
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
