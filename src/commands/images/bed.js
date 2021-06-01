const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
  name: "bed",
  aliases: ["brosbed"],
  Description: "",
  async execute(client, message, args) {
    const user = message.mentions.users.first();

    if (!user) {
        return message.channel.send('<:sh_wait:817144214667132949> You have to mention someone to make him cry!')
    }

    let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });

    const avatar2 = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Bed().getImage(avatar, avatar2);

    let attach = new Discord.MessageAttachment(img, "bed.png");
    message.channel.send(attach);
  },
};
