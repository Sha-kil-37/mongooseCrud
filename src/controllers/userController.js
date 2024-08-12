const UserModel = require("../models/userModel");
const { ObjectId } = require("mongodb");
// mongoose crud oparation
// 1 mongoose creat oparation by user bellow
const creatUser = async (req, res) => {
  try {
    const userData = req.body;
    const { name, email, password, age, city } = userData;
    if (!name && !email && !password && !age && !city) {
      res.status(400).json({ errorMessage: "blank input fild" });
    }
    const chekUser = await UserModel.findOne({ email: email });
    if (chekUser) {
      console.log("user already exist");
      res
        .status(400)
        .json({ errorMessage: "this email already use in this app" });
    } else {
      const creatUser = new UserModel(userData);
      const user = await creatUser.save();
      res.status(200).json({ message: "creat user succesfully", user });
      console.log("creat user succesfully");
    }
  } catch (error) {
    res.status(400).json({ errorMessage: "there was a server side error" });
  }
};
// 2 mongoose read oparation by user bellow
const loginUser = async (req, res) => {
  try {
    const paramsId = req.params.id;
    const query = { _id: new ObjectId(paramsId) };
    const chekLogin = await UserModel.findOne(query);
    if (!chekLogin) {
      res.status(400).json({
        errorMessage: "bad request for login",
      });
    } else {
      res.status(200).json({ message: "login succesfully", user: chekLogin });
      console.log(chekLogin);
    }
  } catch (error) {
    res.status(400).json({ errorMessage: "there was a server side error" });
  }
};
// 3 mongoose update oparation by user bellow
const updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    const paramsId = req.params.id;
    const query = { _id: new ObjectId(paramsId) };
    const updateUser = await UserModel.updateOne(query, {
      $set: updateData,
    });
    if (!updateUser) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res
        .status(200)
        .json({ message: "update succesfully", updateMessage: updateUser });
      console.log(updateUser);
    }
  } catch (error) {
    res.status(400).json({
      errorMessage: "there was a server side error",
    });
  }
};
// 4 mongoose delete oparation by user bellow
const deleteUser = async (req, res) => {
  try {
    const paramsId = req.params.id;
    console.log(paramsId);
    const query = { _id: new ObjectId(paramsId) };
    const deleteUser = await UserModel.deleteOne(query);
    if (deleteUser.deletedCount === 0) {
      res.status(400).json({ errorMessage: "user delete unsucces" });
    } else {
      res
        .status(200)
        .json({ message: "delete user succesfully", deleteData: deleteUser });
      console.log("delete user succesfully ");
    }
  } catch (error) {
    res.status(400).json({ errorMessage: error });
  }
};
const userControllers = { creatUser, loginUser, updateUser, deleteUser };
//
module.exports = userControllers;
