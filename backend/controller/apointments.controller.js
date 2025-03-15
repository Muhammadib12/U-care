import Appointment from "../models/appointment.model.js";

export const Addappointment = async (req, res) => {
  try {
    const { date, time, location, departmentName, personId, doctor } = req.body;

    const newAppointment = await Appointment.create({
      date,
      time,
      location,
      departmentName,
      personId,
      doctor,
    });
    newAppointment.save();
    res.status(201).json({ success: true, data: newAppointment });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const GetAppointment = async (req, res) => {
  try {
    const { userId } = req.params;

    const userAppointments = await Appointment.find({ personId: userId });
    console.log(userAppointments);
    res.status(200).json({ success: true, appointments: userAppointments });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
