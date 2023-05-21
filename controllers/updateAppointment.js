const mongoose = require("mongoose");
const appointment = require("../models/appointment");

const UpdateAppt = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such appointment" });
  }

  const appt = await appointment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!appt) {
    return res.status(400).json({ error: "No such appointment" });
  }

  res.status(200).json(appointment);
};

module.exports = UpdateAppt;
