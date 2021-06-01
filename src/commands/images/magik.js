const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
module.exports = {
  name: "magik",
  description: "Woah! That's magik",

  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 2048
      });

    
      const image = await api.generate("magik", { image: avatar, intensity: 1 });

      let attachment = new Discord.MessageAttachment(image, "magik.png");

      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();

      let avatar = user.displayAvatarURL({ dynamic: false, format: "png", size: 2048 });

      const image = await api.generate("magik", { image: avatar, intensity: 1 });

      let attachment = new Discord.MessageAttachment(image, "magik.png");
      return message.channel.send(attachment);
    }
  },
};
