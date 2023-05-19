const Appointment = require('../models/appointment')

const getAppointment = async (req, res) => {
  const appointment = await Appointment.find();
  res.json(appointment);
}

module.exports = getAppointment