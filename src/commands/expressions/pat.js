const { MessageEmbed } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "pat",
  description: "Pat someone!",
  async execute(client, message, args) {
    
    const user = message.mentions.users.first();


    if (!user) {
      return message.channel.send("Please mention someone!");
    }

    async function work() {
      let owo = await neko.sfw.pat();

      let newEmbed = new MessageEmbed()
        .setDescription(
          `**${message.author.username}** patted with love **${user.username}** (・3・)`
        )
        .setColor("#ffe65d")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    }

    work();
  },
};
