import { Router } from "express";
import userController from "../controller/user";
const router = Router();

router.get("/", userController);

export default router;
