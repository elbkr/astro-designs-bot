const Discord = require("discord.js");
const Caxinha = require("caxinha");
module.exports = {
  name: "circle",
  aliases: ["round"],
  description: "Make a circle with your profile picture",
  async execute(client, message, args) {
    if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({
          dynamic: false,
          format: "png",
        });
  
        let img = await Caxinha.canvas.circle(avatar)
  
        let attach = new Discord.MessageAttachment(img, "circle.png");
        message.channel.send(attach);
      } else {
        const user = message.mentions.users.first();
  
        let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
  
        let img = await Caxinha.canvas.circle(avatar)
  
        let attach = new Discord.MessageAttachment(img, "circle.png");
        message.channel.send(attach);
      }
  },
};
