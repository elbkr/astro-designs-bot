const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
module.exports = {
  name: "trumptweet",
  description: "Send a fake trump tweet",

  async execute(client, message, args) {
      
      if (!args) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the content of the fake tweet"
        );
      }

      let text = args.join(" ");

      

      const image = await api.generate("trumptweet", {text: text });

      let attachment = new Discord.MessageAttachment(image, "trumptweet.png");

      return message.channel.send(attachment);
  },
};
