import { Router } from "express";
import UserController from "../controller/user";
import userController from "../controller/user";
const router = Router();

router.get("/", UserController.getUserCont);
router.post("", UserController.postUserCont);

export default router;
