const { afk } = require("../collection");
const moment = require("moment");

module.exports = async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const mentioned = message.mentions.members.first();

  if (mentioned) {
    
    const data = afk.get(mentioned.id);

    if (data) {
      const [timestamp, reason] = data;

      const Ago = moment(timestamp).fromNow();

      message.reply(`<:sh_zzz:822550709064564761> **${mentioned.user.username}** is afk: ${reason} - ${Ago}`)
    }
  }

  const other = afk.get(message.author.id)

  if(other){
      afk.delete(message.author.id)

      message.reply(
        "<:sh_zzz:822550709064564761> Welcome back! Your AFK has been removed"
      );
  }
};
