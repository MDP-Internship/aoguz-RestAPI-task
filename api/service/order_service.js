class OrderService {
  static add(userID, product) {
    const orderPost = new Order({
      /* 
        user_id: 
        product:  
        */
    })

    orderPost
      .save()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        console.log('post işlemi ile ilgili hata var. Hata kodu : ' + error)
      })
  }
}

module.exports = OrderService
