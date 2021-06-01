const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "phub",
  aliases: ["ph"],
  description: "Send a phub comment!",
  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let member = message.author.username;
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
      });

      if (!args) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the phub comment!"
        );
      }
      let text = args.join(" ");
      let image = await canvacord.Canvas.phub({
        username: member,
        message: text,
        image: avatar,
      });
      let attachment = new Discord.MessageAttachment(image, "phub.png");
      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();

      let member = user.tag;
      let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
      let text = args.slice(1).join(" ");

      if (!text) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the phub comment!"
        );
      }
      let image = await canvacord.Canvas.phub({
        username: member,
        message: text,
        image: avatar,
      });
      let attachment = new Discord.MessageAttachment(image, "phub.png");
      return message.channel.send(attachment);
    }
  },
};
