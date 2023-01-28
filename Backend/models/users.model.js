const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
