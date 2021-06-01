const Discord = require("discord.js");
const { suggestion_ch, tick_emoji, cross_emoji } = require('../../config.json')

module.exports = {
  name: "suggest",
  description: "Sends a suggestion",
  cooldown: 15,
  async execute(client, message, args) {

    if (!args) {
      return message.channel.send(
        "You have to write the content of the suggestion!"
      );
    }
    const sgs = args.join(" ");
    

    const id = suggestion_ch
    const channel = client.channels.cache.get(id);


    let webhook = await channel.fetchWebhooks();
    webhook = webhook.find((x) => x.name === "suggestions");

    if (!webhook) {
      webhook = await channel.createWebhook(`suggestions`, {
        avatar: client.user.displayAvatarURL({ format: 'png' }),
      });
    }

    let avatar = message.author.displayAvatarURL({ format: 'png' });

    await webhook.edit({
      name: message.member.nickname
        ? message.member.nickname
        : message.author.username,
      avatar: avatar
    });

     const embed = new Discord.MessageEmbed()
       .setTitle("Suggestion")
       .setColor("#FF2C4B")
       .setDescription(sgs)
       .setTimestamp(new Date());

     await webhook.send({
       embeds: [embed],
     }).then(async msg => {
         await msg.react(tick_emoji); 
         await msg.react(cross_emoji)
        })

    
    await webhook.edit({
      name: `suggestions`,
      avatar: client.user.displayAvatarURL({ format: 'png' }),
    });

    return message.react(tick_emoji);
  },
};
