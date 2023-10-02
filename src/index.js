const express = require("express");
const { PORT } = require("./config/serverConfig");
const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

prepareAndStartServer();
