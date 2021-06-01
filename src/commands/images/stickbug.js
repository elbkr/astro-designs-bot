const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
module.exports = {
  name: "stickbug",
  description: "Get stickbugged lol",

  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      let avatar = message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 2048,
      });

      message.channel
        .send("<:sh_wait:817144214667132949> It may take a while...")
        .then(async (msg) => {
          const image = await api.generate("stickbug", { url: avatar });

          let attachment = new Discord.MessageAttachment(image, "stickbug.mp4");
          msg.delete();
          message.channel.send(attachment);
        });
    } else {
      const user = message.mentions.users.first();

      let avatar = user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 2048,
      });

      message.channel
        .send("<:sh_wait:817144214667132949> It may take a while...")
        .then(async (msg) => {
          const image = await api.generate("stickbug", { url: avatar });

          let attachment = new Discord.MessageAttachment(image, "stickbug.mp4");
          msg.delete();
          message.channel.send(attachment);
        });
    }
  },
};
