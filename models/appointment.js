const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  uniqueCode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  apptDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  firstTime: {
    type: String,
    required: true,
  },
  reqDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  apptStatus: {
    type: String,
    required: true,
  },
  apptTime: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  beforeAppt: {
    type: String,
    required: false,
  },
  afterAppt: {
    type: String,
    required: false,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
