const { NotificationTicket } = require("../models");

//export ticket repository

module.exports = {
  async getAllTickets() {
    return NotificationTicket.findAll();
  },
  async createTicket(ticket) {
    console.log("repository", ticket);
    return NotificationTicket.create(ticket);
  },
  //fetch pending tickets
  async fetchPendingTickets() {
    return NotificationTicket.findAll({
      where: {
        status: "pending",
      },
    });
  },

  //get all tickets to send email
  async getAllTicketsToSendEmail() {
    return NotificationTicket.findAll({
      where: {
        status: "pending",
        notf,
      },
    });
  },
};
