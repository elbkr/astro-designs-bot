const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
module.exports = {
  name: "captcha",
  Description: "Make a captcha with someone's profile pic",
  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 2048,
      });

      const image = await api.generate("captcha", {
        url: avatar,
        username: message.author.username,
      });

      let attachment = new Discord.MessageAttachment(image, "captcha.png");

      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();

      let avatar = user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 2048,
      });

      const username = user.username
      const image = await api.generate("captcha", { url: avatar, username: username });

      let attachment = new Discord.MessageAttachment(image, "captcha.png");
      return message.channel.send(attachment);
    }
  },
};
