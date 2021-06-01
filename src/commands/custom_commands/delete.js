const cmdModel = require("../../models/cmd");

module.exports = {
  name: "cc-delete",
  aliases: ["ccd"],
  async execute(client, message, args) {
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        "Eeeh wait! You can't use that command"
      );

    const name = args[0];

    if (!name) return message.channel.send("Please specify a command name");

    const data = await cmdModel.findOne({
      Guild: message.guild.id,
      Command: name,
    });

    if (!data)
      return message.channel.send("That custom command does not exist!");

    await cmdModel.findOneAndDelete({ Guild: message.guild.id, Command: name });
    message.channel.send(`Removed **${name}** from custom commands!`);
  },
};
