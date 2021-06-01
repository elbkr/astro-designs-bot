const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
  name: "quote",
  description: "Send a fake quote!",
  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let user = message.member;
      let member = user.user.username;
      let avatar = user.user.displayAvatarURL({
        dynamic: false,
        format: "png",
      });

      let text = args.join(" ");

      if (!args) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the content of the fake message"
        );
      }

      let userColor =
        user.displayHexColor === "#000000" ? "#f0f0ff" : user.displayHexColor;

      let image = await canvacord.Canvas.quote({
        image: avatar,
        message: text,
        username: member,
        color: userColor,
      });
      let attachment = new Discord.MessageAttachment(image, "quote.png");
      return message.channel.send(attachment);
    } else {
      const user = message.mentions.members.first();

      let member = user.user.username;
      let avatar = user.user.displayAvatarURL({
        dynamic: false,
        format: "png",
      });
      let userColor =
        user.displayHexColor === "#000000" ? "#f0f0ff" : user.displayHexColor;

      let output = args.slice(1).join(" ");

      if (!output) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the content of the fake message"
        );
      }

      let image = await canvacord.Canvas.quote({
        image: avatar,
        message: output,
        username: member,
        color: `${userColor}`,
      });
      let attachment = new Discord.MessageAttachment(image, "quote.png");
      return message.channel.send(attachment);
    }
  },
};
