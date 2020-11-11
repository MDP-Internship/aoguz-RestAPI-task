import { Router } from "express";
import ProductController from "../controller/product";
const router = Router();

router.get("/", ProductController.getProductCont);
router.post("/", ProductController.postProductCont);
router.patch("/:productId", ProductController.updateProductCont);
router.delete("/:productId", ProductController.deleteProductCont);

export default router;
