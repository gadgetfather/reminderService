const amqlib = require("amqplib");
const {
  MESSAGE_BROKER_URL,
  REMINDER_BINDING_KEY,
  EXCHANGE_NAME,
} = require("../config/serverConfig");
const createChannel = async () => {
  try {
    const connection = await amqlib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel(
      EXCHANGE_NAME,
      "direct",
      false
    );
    return channel;
  } catch (error) {
    console.log("error", error);
  }
};

const subscribeMessage = async (channel, service, binding_key) => {
  try {
    const applicationQueue = await channel.assertQueue(QUEUE_NAME);
    await channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);
    await channel.consume(applicationQueue.queue, (message) => {
      console.log("message", message.content.toString());
      channel.ack(message);
    });
  } catch (error) {
    console.log("error", error);
  }
};

const publishMessage = async (channel, service, binding_key, message) => {
  try {
    await channel.assertQueue("QUEUE_NAME");
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  createChannel,
  subscribeMessage,
};
