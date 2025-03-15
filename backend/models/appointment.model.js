import mongoose, { Schema } from "mongoose";

const AppointmentSchema = Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },
  personId: {
    type: String,
    required: true,
    default: null,
  },
  doctor: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
export default Appointment;
