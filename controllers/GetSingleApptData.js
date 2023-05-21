const appointment = require("../models/appointment");
const getSingleAppointment = async (req, res) => {
  try {
    // const data = await appointment.finc({ id: req.params.id });
    const data = await appointment.findById({ _id: req.params.id });
    if (!data) {
      return res.status(404).send("Data not found");
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = getSingleAppointment;
const Appointment = require("../models/appointment");
