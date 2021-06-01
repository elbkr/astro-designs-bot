const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
module.exports = {
  name: "tweet",
  description: "Send a fake tweet",

  async execute(client, message, args) {
    if (!message.mentions.users.size) {
      const user = message.author.username;

      if (!args) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the content of the fake tweet"
        );
      }
      
      let text = args.join(" ");


      const image = await api.generate("tweet", { username: user, text: text });

      let attachment = new Discord.MessageAttachment(image, "tweet.png");

      return message.channel.send(attachment);
    } else {
      const user = message.mentions.users.first();
      let username = user.username;
      let output = args.slice(1).join(" ");

      if (!output) {
        return message.channel.send(
          "<:sh_wait:817144214667132949> You have to write the content of the fake tweet"
        );
      }

      const image = await api.generate("tweet", {
        username: username,
        text: output,
      });

      let attachment = new Discord.MessageAttachment(image, "tweet.png");
      return message.channel.send(attachment);
    }
  },
};
