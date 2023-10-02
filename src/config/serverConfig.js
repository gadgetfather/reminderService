const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3004;
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MESSAGE_BROKER_URL = process.env.MESSAGE_BROKER_URL;
const EXCHANGE_NAME = process.env.EXCHANGE_NAME;
const REMINDER_BINDING_KEY = process.env.REMINDER_BINDING_KEY;
module.exports = {
  PORT,
  EMAIL,
  EMAIL_PASS,
  MESSAGE_BROKER_URL,
  EXCHANGE_NAME,
  REMINDER_BINDING_KEY,
};
