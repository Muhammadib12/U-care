import express from "express";
import {
  Addappointment,
  GetAppointment,
} from "../controller/apointments.controller.js";

const router = express.Router();

router.post("/addappiontment", Addappointment);
router.get("/getappiontment/:userId", GetAppointment);
export default router;
