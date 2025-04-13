const { User } = require("../model/userModel");

const res_object = { status: "Success", code: 0, message: "", data: null };

const createUserController = async (req, res, next) => {
  try {
    // create user document
    let new_user = new User(req.body);

    // add new user document to database
    await new_user.save();

    res.status(200).json(new_user);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUserController };
