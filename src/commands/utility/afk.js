const Discord = require("discord.js");
const { afk } = require("../../collection/index");
module.exports = {
  name: "afk",
  description: "Set your 'status' to afk so people know you are not in discord",
  cooldown: 15,

  async execute(client, message, args) {
    const reason = args.join(" ") || "AFK";

    afk.set(message.author.id, [Date.now(), reason]);
    message.reply(`<:sh_zzz:822550709064564761> Set your afk: ${reason}`)
  },
};
