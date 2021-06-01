const Discord = require("discord.js");
const Caxinha = require("caxinha");

module.exports = {
  name: "bolsonaro",
  description: "You are Bolsonaro's art",
  async execute(client, message, args) {
    if (!message.mentions.users.first()) {
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
      });

      let img = await Caxinha.canvas.bolsonaro(avatar)

      let attach = new Discord.MessageAttachment(img, "bolsonaro.png");
      message.channel.send(attach);
    } else {
      const user = message.mentions.users.first();

      let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });

      let img = await Caxinha.canvas.bolsonaro(avatar)

      let attach = new Discord.MessageAttachment(img, "bolsonaro.png");
      message.channel.send(attach);
    }
  },
};
