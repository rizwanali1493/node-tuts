const mongoose = require("mongoose");

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

const post_schema = new mongoose.Schema({
  deviceType:{
    type: String,
    required: true
  },
  brand: String,
  modal: String,
  problems: [String],
  appointmentDate: String,
  totalPrice: Number,
  name: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    // unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phNo: Number,
  address: String,
  passCode: Number,
});


module.exports = mongoose.model("post_data", post_schema)