const { User } = require("../model/userModel");

const createUserController = async (req, res, next) => {
  try {
    let new_user = new User(req.body);

    let result = await User.create(new_user);
    // console.log(result);

    res.status(200).json(new_user);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUserController };
