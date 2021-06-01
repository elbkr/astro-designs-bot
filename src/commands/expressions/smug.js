const { MessageEmbed } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "smug",
  description: "Smug about something!",
  async execute(client, message, args) {
   

    async function work() {
      let owo = await neko.sfw.smug();

      let newEmbed = new MessageEmbed()
        .setDescription(
          `**${message.author.username}** smugged about that (˘⌣˘ )**`
        )
        .setColor("#FF2C4B")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    }

    work();
  },
};
