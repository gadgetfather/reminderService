const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASS } = require("./serverConfig");
const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

module.exports = sender;
