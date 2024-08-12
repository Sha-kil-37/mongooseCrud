const defultGetController = (req, res) => {
  res.json("this is defult get controller");
};
//
const defultPostController = (req, res) => {
  res.json("this is defult post controller");
};
const defultControllers = { defultGetController, defultPostController };
//
module.exports = defultControllers;
