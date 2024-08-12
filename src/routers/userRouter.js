const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
//
router.post("/creatUser", userControllers.creatUser);
router.get("/userLogin/:id", userControllers.loginUser);
router.put("/updateUser/:id", userControllers.updateUser);
router.delete("/deleteUser/:id",userControllers.deleteUser)
//
module.exports = router;
