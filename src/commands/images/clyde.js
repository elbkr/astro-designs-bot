const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "clyde",
  description: "Send clyde (official discord bot) message",
  async execute(client, message, args) {
    if (!args) {
      return message.channel.send(
        "<:sh_wait:817144214667132949> You have to write a message that clyde will say"
      );
    }

    let text = args.join(" ");
    let image = await canvacord.Canvas.clyde(text);
    let attachment = new Discord.MessageAttachment(image, "clyde.png");
    return message.channel.send(attachment);
  },
};
