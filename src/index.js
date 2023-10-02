const express = require("express");
const { PORT } = require("./config/serverConfig");
const cron = require("node-cron");
const app = express();
const { sendBasicEmail } = require("./services/email-service");
const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);

    sendBasicEmail(
      "support@noti.com",
      "kamblea635@gmail.com",
      "This is testing email",
      "This is testing email body"
    );
  });
};

prepareAndStartServer();
