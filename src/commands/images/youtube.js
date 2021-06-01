const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "youtube",
  aliases: ["yt"],
  description: "Send a youtube comment!",
  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let member = message.author.username;
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
      });

      let text = args[0];

      if (!args[0]) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the YouTube comment!"
        );
      }

      let image = await canvacord.Canvas.youtube({
        username: member,
        content: text,
        avatar: avatar,
        dark: false,
      });
      let attachment = new Discord.MessageAttachment(image, "youtube.png");
      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();

      let member = user.username;
      let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
      let text = args.slice(1).join(" ");

      if (!text) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the YouTube comment!"
        );
      }
      let image = await canvacord.Canvas.youtube({
        username: member,
        content: text,
        avatar: avatar,
        dark: false,
      });
      let attachment = new Discord.MessageAttachment(image, "youtube.png");
      return message.channel.send(attachment);
    }
  },
};
