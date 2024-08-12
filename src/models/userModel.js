const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 10,
      max: 90,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
//
module.exports = mongoose.model("user", userSchema);
