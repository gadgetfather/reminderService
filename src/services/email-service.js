const { sender } = require("../config/emailConfig");
const { ticketRepository } = require("../repository");
const sendBasicEmail = (from, to, mailSubject, mailBody) => {
  sender.sendMail({
    from,
    to,
    subject: mailSubject,
    text: mailBody,
  });
};
const fetchPendingEmails = async () => {
  const pendingEmails = await ticketRepository.fetchPendingTickets();
  return pendingEmails;
};

const createTicket = async (ticket) => {
  const newTicket = await ticketRepository.createTicket(ticket);
  return newTicket;
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createTicket,
};
