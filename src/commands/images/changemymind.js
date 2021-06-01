const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "changemymind",
  aliases: ["cmm"],
  description: "Change someone's mind with a beautiful text",
  async execute(client, message, args) {
    if (!args) {
      return message.channel.send(
        "<:sh_wait:817144214667132949> You have to write a message to put on the banner!"
      );
    }
    let text = args.join(" ");
    let image = await canvacord.Canvas.changemymind(text);
    let attachment = new Discord.MessageAttachment(image, "cmm.png");
    return message.channel.send(attachment);
  },
};
