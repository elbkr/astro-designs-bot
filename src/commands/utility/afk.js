const Discord = require("discord.js");
const { afk } = require("../../collection/index");
const { afk_emoji } = require('../../config.json')
module.exports = {
  name: "afk",
  description: "Set your 'status' to afk so people know you are not in discord",
  cooldown: 15,

  async execute(client, message, args) {
    const reason = args.join(" ") || "AFK";

    afk.set(message.author.id, [Date.now(), reason]);
    message.reply(`${afk_emoji} Set your afk: ${reason}`)
  },
};
