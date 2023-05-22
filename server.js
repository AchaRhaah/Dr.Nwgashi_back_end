const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const UpdateAppt = require("./controllers/updateAppointment");
const createAppointment = require("./controllers/createAppt");
const getAppointment = require("./controllers/getAppointments");
const getSingleAppointment = require("./controllers/GetSingleApptData");
const Signup = require("./controllers/signup");
const Login = require("./controllers/login");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Connecting to DB
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch(console.error);

app.get("/", getAppointment);

app.get("/:id", getSingleAppointment);

app.post("/record", createAppointment);

app.patch("/update/:id", UpdateAppt);

app.post("/signup", Signup);

app.post("/login", Login);



//

app.listen(PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
