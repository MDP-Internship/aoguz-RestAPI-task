import { Router } from "express";
import productController from "../controller/product";
const router = Router();

router.get("/", productController);
