const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const neko = new client();

module.exports = {
  name: "cuddle",
  description: "Cuddle someone!",
  async execute(client, message, args) {

    const user = message.mentions.users.first();


    if (!user) {
      return message.channel.send("Please mention someone!");
    }

    async function work() {
      let owo = await neko.sfw.cuddle();

      let newEmbed = new MessageEmbed()
        .setDescription(
          `**${user.username}** got a cuddle from **${message.author.username}**`
        )
        .setColor("#ffe65d")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    }

    work();
  },
};
