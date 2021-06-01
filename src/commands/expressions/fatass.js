const Discord = require("discord.js");
const { nonsfw } = require("../../messages/nsfw");
const client = require("nekos.life");
const neko = new client();

module.exports = {
  name: "fatass",
  description: "Spank someone in his fat ass!",
  cooldown: 5,

  async execute(client, message, args) {
    if (!message.channel.nsfw) {
      return nonsfw(message);
    }
    const user = message.mentions.users.first();


    if (!user) {
      return message.channel.send("Please mention someone!");
    }

    async function work() {
      let owo = await neko.nsfw.spank();

      const trap = new Discord.MessageEmbed()
        .setDescription(
          `**${message.author.username}** spanked **${user.username}**`
        )
        .setImage(owo.url)
        .setColor("#ffe65d")
        .setURL(owo.url);
      message.channel.send(trap);
    }
    work();
  },
};
