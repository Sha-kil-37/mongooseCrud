const mongoose = require("mongoose");
const mongoUri = process.env.mongoUri;
//
const connectDb = async () => {
  await mongoose
    .connect(mongoUri, {
      autoIndex: true,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.error("db error", error);
    });
};
//
module.exports = connectDb;
