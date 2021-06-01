const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const neko = new client();

module.exports = {
  name: "baka",
  description: "STUPID!",
  async execute(client, message, args) {
    const user = message.mentions.users.first();

    if (!user) {
      let owo = await neko.sfw.baka();

      let newEmbed = new MessageEmbed()
        .setDescription(`**BBAKAAAAAA** ** ୧༼ಠ益ಠ༽୨`)
        .setColor("#ffe65d")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    } else {
      let owo = await neko.sfw.baka();

      let newEmbed = new MessageEmbed()
        .setDescription(`**BBAKAAAAAA** ${user.username} ** ୧༼ಠ益ಠ༽୨`)
        .setColor("#ffe65d")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    }
  },
};
