const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3004;
module.exports = {
  PORT,
};
