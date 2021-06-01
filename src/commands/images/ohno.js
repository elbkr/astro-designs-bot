const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "ohno",
  aliases: ["istupid"],
  description: "Oh no, it's stupid!",
  async execute(client, message, args) {
    if (!args) {
      return message.channel.send(
        "<:sh_wait:817144214667132949> You have to enter a stupid message"
      );
    }
    let text = args.join(" ");
    let image = await canvacord.Canvas.ohno(text);
    let attachment = new Discord.MessageAttachment(image, "ohno.png");
    return message.channel.send(attachment);
  },
};
