const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
    minlength: [3, "username field must have atleast 3 characters"],
  },
  name: String,
  contact: {
    type: String,
    unique: true,
  },
  profileimage: String,

  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});
module.exports = mongoose.model("DHANJEET", employee);
