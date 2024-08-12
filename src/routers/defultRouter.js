const express = require("express");
const router = express.Router();
const defultControllers = require("../controllers/defultController");
//
router.get("/", defultControllers.defultGetController);
router.post("/", defultControllers.defultPostController);
// 
module.exports = router;
