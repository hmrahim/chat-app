const bcrypt = require("bcrypt");
const User = require("../models/Peoples");
const getUsers = (req, res, next) => {
  res.render("users");
};

const addUser = async (req, res, next) => {
  let newUser;
  const hashPassowrd = await bcrypt.hash(req.body.password, 10);
  if (req.file && req.files.length > 0) {
    newUser = new User({
      ...newUser,
      avatar: req.files[0].filename,
      password: hashPassowrd,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashPassowrd,
    });
  }
  try {
    const result = await newUser.save(
      res.status(200).json({
        message: "user was added succesfully",
      })
    );
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "unknown error occured",
        },
      },
    });
  }
};

module.exports = { getUsers,addUser };
