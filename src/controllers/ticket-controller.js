const { createTicket } = require("../services/email-service");

const createTicketController = async (req, res) => {
  const ticket = {
    ...req.body,
    notificationTime: new Date(),
  };
  console.log("00000000000000", ticket);
  const newTicket = await createTicket(ticket);
  res.status(201).json(newTicket);
};

module.exports = {
  createTicketController,
};
