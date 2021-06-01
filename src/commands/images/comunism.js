const Discord = require('discord.js')

module.exports = {
name: 'comunism',
description: 'Comunism flag',

async execute(client, message, args) {
    if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({
          dynamic: false,
          format: "png",
        });
  
        let img = await Caxinha.canvas.comunism(avatar)
  
        let attach = new Discord.MessageAttachment(img, "comunism.png");
        message.channel.send(attach);
      } else {
        const user = message.mentions.users.first();
  
        let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
  
        let img = await Caxinha.canvas.comunism(avatar)
  
        let attach = new Discord.MessageAttachment(img, "comunism.png");
        message.channel.send(attach);
      }
}
}