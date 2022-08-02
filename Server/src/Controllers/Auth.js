const User = require("../models/Auth");
const jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id,role:user.role }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id,  email, role,username,contactnumber} = user;
        res.status(200).json({
          token,
          user: {
            _id,
            username,
            email,
            role,
            contactnumber
            
          },
        });
      } else {
        return res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "Somethin Went wrong" });
    }
  });
};
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) return res.status(400).json({ message: "User Already Register" });

    const { email, password,username,role } = req.body;
    const _user = new User({
   
      email,
      password,
      username,
      role
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }

      if (data) {
        return res.status(201).json({
          message: "User created Succesfully",
        });
      }
    });
  });
};

