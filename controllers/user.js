const bcrypt = require("bcryptjs");
const SUser = require("../models/user");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
require("dotenv").config();

const validateSignupInput = require("../validations/signup");
const validateLoginInput = require("../validations/login");

const secretKey = process.env.secretKey;

// const passport = require("passport");
exports.signup = (req, res) => {

  const {errors, isValid} = validateSignupInput(req.body);
  if(!isValid) return res.status(400).json(errors);

  const { email, password, name, gender } = req.body;

  SUser.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      errors.email = "Email already exists.";
      res.status(400).json({
        errors: errors,
      });
    } else {
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      const newUser = new SUser({
        name: name,
        email: email,
        password: password,
        gender: gender,
        avatar: avatar,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = {
                id: user.id,
                name: user.id,
                email: user.email,
                avatar: user.avatar,
              };

              jwt.sign(
                payload,
                secretKey,
                {
                  expiresIn: "365d",
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

exports.login = (req, res) => {
  //   const { errors, isValid } = validateLoginInput(req.body);
  //   if (!isValid) return res.status(400).json(errors);

  const { email, password } = req.body;

  SUser.findOne({
    email,
  }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        };

        jwt.sign(
          payload,
          secretKey,
          {
            expiresIn: "365d",
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        res.status(400).json({ errors });
      }
    });
  });
};
