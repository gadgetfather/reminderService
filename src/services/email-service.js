const sender = require("../config/emailConfig");

const sendBasicEmail = (from, to, mailSubject, mailBody) => {
  sender.sendMail({
    from,
    to,
    subject: mailSubject,
    text: mailBody,
  });
};
module.exports = {
  sendBasicEmail,
};
