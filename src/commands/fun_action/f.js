module.exports = {
  name: "f",
  description: "pay respects",
  async execute(client, message, args) {
    let mention = message.mentions.members.first();
    if (!mention)
      return message.channel.send(
        `${message.author.username} has paid their respect <:sh_f:799392397389856788> `
      );
    const member = message.mentions.members.first();
    const mentioned = message.mentions.members.first();
    if (mentioned.id === "800074066949832714")
      return message.channel.send(
        `${message.author.username} has paid their respect for.... me!? Don't kick me please :(`
      );
    if (member)
      return message.channel.send(
        `${message.author.username} has paid their respect for **${args.join(
          " "
        )}** <:sh_f:799392397389856788> `
      );
  },
};
