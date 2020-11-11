import Product from "../model/Product";

class ProductController {
  static async getProductCont(req, res, next) {
    Product.find({}, (err, product) => {
      //find {} ile tüm veriler üzerinde arama yapar.
      res.send(product);
    });
  }

  static async postProductCont(req, res, next) {
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

  static async updateProductCont(req, res, next) {
    try {
      const updatedProduct = await Product.findOne(
        { _id: req.params.productId },
        { $set: { productInfo: req.params.productId } },
        { $set: { price: req.params.price } }
      );
      res.json(updatedProduct);
    } catch (err) {
      res.json({
        message: "Güncelleme işlemi yapılırken hata oluştu",
        errorCode: error,
      });
    }
  }
  static async deleteProductCont(req, res, next) {
    try {
      const deletedProduct = await Product.deleteOne({ _id: req.params.productId });
      res.json(deletedProduct);
    } catch (error) {
      res.json({
        message: "Silme işlemi yapılırken hata oluştu",
        errorCode: error,
      });
    }
  }
}
export default ProductController;
