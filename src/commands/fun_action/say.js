module.exports = {
  name: "say",
  description: "Make the bot say something",
  usage: `<message>`,
  async execute(client, message, args) {
    const sayContent = args.join(" ");
    if (!args[0]) {
      message.channel.send("Please include what do you want to say!");
    }
    message.delete();
    message.channel.send(sayContent);
  },
};
