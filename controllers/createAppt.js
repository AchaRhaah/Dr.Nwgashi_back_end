const Appointment = require("../models/appointment");
const mongoose = require("mongoose");

const createAppointment = async (req, res) => {
  // Use try-catch block to catch validation errors
  try {
    const appointment = new Appointment({
      uniqueCode: req.body.uniqueCode,
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      phone: req.body.phone,
      email: req.body.email,
      apptDate: req.body.apptDate,
      firstTime: req.body.firstTime,
      reqDate: req.body.reqDate,
      apptStatus: req.body.apptStatus,
      apptTime: req.body.apptTime,
      address: req.body.address,
      city: req.body.city,
      beforeAppt: req.body.beforeAppt,
      afterAppt: req.body.afterAppt,
    });

    const result = await appointment.save();

    // Send the saved appointment as a response
    res.json(result);
  } catch (err) {
    console.log(err);

    // Check for validation errors and send 400 Bad Request status code
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

module.exports = createAppointment;
