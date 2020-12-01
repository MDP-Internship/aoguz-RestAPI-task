const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

exports.isUserInfoValidation = function isUserInfoValidation(object) {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    surname: Joi.string().required().min(2),
    orders: Joi.array().required(),
  })

  const result = schema.validate(object, { abortEarly: false })

  if (result.error) {
    return {
      res: true,
      error: {
        message: result.error.message,
        value: result.error.details[0].context.value,
      },
    }
  } else {
    return {
      res: false,
    }
  }
}

exports.isProductValidation = function isProdutValidation(object) {
  const schema = Joi.object({
    product_info: Joi.string().required().min(1),
  })

  const productResult = schema.validate(object, { abortEarly: false })

  if (productResult.error) {
    return {
      res: true,
      err: {
        message: productResult.error.message,
        value: productResult.error.details[0].context.value,
      },
    }
  } else {
    return {
      res: false,
    }
  }
}

exports.isOrderValidation = function isOrderValidation(object) {
  const schema = Joi.object({
    _id: Joi.objectId(),
    count: Joi.number().required(),
  })

  const orderResult = schema.validate(object, { abortEarly: false })
  if (orderResult.error) {
    return {
      res: true,
      err: {
        message: orderResult.error.message,
        value: orderResult.error.details[0].context.value,
      },
    }
  } else {
    return {
      res: false,
    }
  }
}
