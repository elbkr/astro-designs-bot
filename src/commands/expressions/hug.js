const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const neko = new client();

module.exports = {
  name: "hug",
  description: "Hug someone!",
  async execute(client, message, args) {
    const user = message.mentions.users.first();


    if (!user) {
      return message.channel.send("Please mention someone!");
    }

    async function work() {
      let owo = await neko.sfw.hug();

      let newEmbed = new MessageEmbed()
        .setDescription(
          `**${message.author.username}** hugged **${user.username}** ʕっ•ᴥ•ʔっ`
        )
        .setColor("#ffe65d")
        .setImage(owo.url);
      message.channel.send(newEmbed);
    }

    work();
  },
};
