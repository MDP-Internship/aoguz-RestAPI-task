import { Router } from "express";
import OrderController from "../controller/order";
const router = Router();

router.get("/", OrderController.getOrderCont);
router.post("/", OrderController.postOrderCont);
router.patch("/:orderId", OrderController.updateOrderCont);
router.delete("/:orderId", OrderController.deleteOrderCont);

export default router;
