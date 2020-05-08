require("dotenv").config();

const SUser = require("../models/user");
const Verify = require("../models/verify");

const validateNumber = require("../validations/verfiyNumber");
const validateCode = require("../validations/verifyCode");
// const isEmpty = require("../validations/isEmpty");

const accountSid = process.env.twilioSid;
const authToken = process.env.twilioAuth;
const verifySid = process.env.twilioVerifySid;
const client = require("twilio")(accountSid, authToken);

exports.number = (req, res) => {
  // const errors = {};
  // errors.number = "Failed";
  // return res.status(400).json(errors);
  const { number } = req.body;
  const { errors, isValid } = validateNumber(number);
  if (!isValid) return res.status(400).json(errors);

  SUser.findOne({ mobile: number }).then((user) => {
    console.log("users", user);
    if (user) {
      errors.number = "Number already exists";
      return res.status(400).json(errors);
    }
  });

  SUser.findOne({ _id: req.user.id }).then((user) => {
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (user.mobile.length !== 0) {
      errors.user = "User already verified";
      return res.status(400).json(errors);
    }

    Verify.findOne({ mobile: number }).then((user) => {
      if (user) {
        if (user._id !== req.user.id) {
          errors.number = "Number already exists";
        }
      }
    });

    Verify.findOne({ _id: req.user.id }).then((user) => {
      if (user) {
        client.verify
          .services(verifySid)
          .verifications.create({
            to: number,
            channel: "sms",
          })
          .then((verifications) => {
            Verify.updateOne(
              { _id: req.user.id },
              {
                $set: {
                  mobile: number,
                  sid: verifications.sid,
                  status: verifications.status,
                },
              }
            )
              .then(() => res.json({ msg: "code sent" }))
              .catch((err) => res.status(400).json({ error: err }));
          })
          .catch((err) => res.status(400).json({ error: err }));
      } else {
        client.verify
          .services(verifySid)
          .verifications.create({
            to: number,
            channel: "sms",
          })
          .then((verifications) => {
            const userVerifyDetails = new Verify({
              _id: req.user.id,
              mobile: req.body.number,
              sid: verifications.sid,
              status: verifications.status,
            });

            userVerifyDetails
              .save()
              .then((user) => res.json({ msg: "code sent" }))
              .catch((err) => res.status(500).json(err));
          })
          .catch((err) => res.status.json({ error: "Phone number incorrect" }));
      }
    });
  });
};

exports.code = (req, res) => {
  const { code } = req.body;
  const { errors, isValid } = validateCode(code);

  if (!isValid) return res.status(400).json(errors);

  Verify.findOne({ _id: req.user.id }).then((user) => {
    client.verify
      .services(verifySid)
      .verificationChecks.create({
        verificationSid: user.sid,
        code: code,
      })
      .then((verification_checks) => {
        Verify.updateOne(
          { _id: req.user.id },
          { $set: { status: verification_checks.status } }
        )
          .then((userss) => console.log("verificy update success", userss))
          .catch((err) => console.log("verify failed", err));
        SUser.updateOne(
          { _id: req.user.id },
          { $set: { mobile: verification_checks.to } }
        )
          .then((userss) => console.log("SUser update", userss))
          .catch((err) => console.log("suser failed", err));
        res.json({ status: "success" });
      })
      .catch((err) => {
        errors.code = "Incorrect verification code";
        return res.status(400).json(errors);
      });
  });
};
