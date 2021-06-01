const { f_emoji } = require('../../config.json')

module.exports = {
  name: "f",
  description: "pay respects",
  async execute(client, message, args) {
    let mention = message.mentions.members.first();
    if (!mention)
      return message.channel.send(
        `${message.author.username} has paid their respect ${f_emoji}`
      );
    const member = message.mentions.members.first();
    const mentioned = message.mentions.members.first();
    if (mentioned.id === "849233562016546826")
      return message.channel.send(
        `${message.author.username} has paid their respect for.... me!? Don't kick me please :(`
      );
    if (member)
      return message.channel.send(
        `${message.author.username} has paid their respect for **${args.join(
          " "
        )}** ${f_emoji}`
      );
  },
};
