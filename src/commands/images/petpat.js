const request = require("node-superfetch");
const Discord = require('discord.js')
module.exports = {
  name: "petpat",
  description: "Petpat someone",
  async execute(client, message, args) {
    const user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.author;

    let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });

    const { body } = await request.get(
      `https://api.monkedev.com/canvas/petpet?imgUrl=${avatar}`
    );

    const attach = new Discord.MessageAttachment(body, "petpat.gif");
    message.channel.send(attach);
  },
};
