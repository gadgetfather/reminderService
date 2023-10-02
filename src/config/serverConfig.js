const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3004;
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
module.exports = {
  PORT,
  EMAIL,
  EMAIL_PASS,
};
