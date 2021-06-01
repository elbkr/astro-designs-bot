const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
  name: "lisapresentation",
  aliases: ["lisa"],
  Description: "",
  async execute(client, message, args) {
    if (!args) {
      return message.channel.send(
        "You have to write a message to put on lisa's presentation"
      );
    }

    let text = args.join(" ");

    let img = await new DIG.LisaPresentation().getImage(text);

    let attach = new Discord.MessageAttachment(img, "lisa.png");
    message.channel.send(attach);
  },
};
