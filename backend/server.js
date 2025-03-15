import express from "express";
import cors from "cors";
import "dotenv/config";
import AuthRouter from "./routes/auth.route.js";
import Appointment from "./routes/appointment.route.js";
import { connectDb } from "./utils/connectDb.js";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth/v1", AuthRouter);
app.use("/api/appointment/v1", Appointment);

app.listen(PORT, () => {
  console.log(`Console is running in port ${PORT}`);
  connectDb();
});
