const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "opinion",
  aliases: ["opn"],
  description: "Send an opinion comment!",
  async execute(client, message, args) {
      
    if (!message.mentions.users.size) {
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
      });

      if (!args) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the message that the son will say!"
        );
      }
      let text = args;
      let image = await canvacord.Canvas.opinion(avatar, text);
      let attachment = new Discord.MessageAttachment(image, "opinion.png");
      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();

      let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
      let text = args.slice(1).join(" ");

      if (!text) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the message that the son will say!"
        );
      }

      let image = await canvacord.Canvas.opinion(avatar, text);
      let attachment = new Discord.MessageAttachment(image, "opinion.png");
      return message.channel.send(attachment);
    }
  },
};
