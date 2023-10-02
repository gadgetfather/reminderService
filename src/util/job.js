const cron = require("node-cron");
const { fetchPendingTickets } = require("../repository/ticket-repository");
const { sendBasicEmail } = require("../services/email-service");
/*
    This is a job scheduler that runs every minute
    and sends all pending emails
    */

const setupJobs = async () => {
  // console.log("cron", cron);
  cron.schedule("*/1 * * * *", async () => {
    console.log("running a task every minute");
    const pendingEmails = await fetchPendingTickets();
    pendingEmails.forEach((email) => {
      console.log("email", email.dataValues);
      sendBasicEmail(
        "notif@gmail.com",
        email.dataValues.recipientEmail,
        email.dataValues.subject,
        email.dataValues.content
      );
    });
  });
};

module.exports = setupJobs;
