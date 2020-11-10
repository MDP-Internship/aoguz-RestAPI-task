import Product from "../model/Product";

class ProductController {
  static async getProduct(req, res, next) {
    Product.find({}, (err, product) => {
      //find {} ile tüm veriler üzerinde arama yapar.
      res.send(product);
    });
  }

  static async postProduct(req, res, next) {
    const product = new Product({
      productInfo: req.body.productInfo,
      price: req.body.price,
    });
    product
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("post işlemi ile ilgili hata var. Hata kodu : " + err);
      });
  }
}
