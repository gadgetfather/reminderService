const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const db = require("./models");
const app = express();
const ticketController = require("./controllers/ticket-controller");
const job = require("./util/job");
const cron = require("node-cron");
const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", ticketController.createTicketController);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    // db.sequelize.sync({ force: true });
    // cron.schedule("*/1 * * * *", () => {
    //   console.log("running a task every two minutes");
    // });
    job();
  });
};

prepareAndStartServer();
