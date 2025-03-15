import express from "express";
import { Register, LogIn, UpdateUser } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", Register);
router.get("/login/:phonenumber", LogIn);
router.put("/update/:personId", UpdateUser);
export default router;
