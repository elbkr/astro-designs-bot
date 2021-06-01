const { afk } = require("../collection");
const moment = require("moment");
const { afk_emoji } = require('../config.json')

module.exports = async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const mentioned = message.mentions.members.first();

  if (mentioned) {
    
    const data = afk.get(mentioned.id);

    if (data) {
      const [timestamp, reason] = data;

      const Ago = moment(timestamp).fromNow();

      message.reply(`${afk_emoji} **${mentioned.user.username}** is afk: ${reason} - ${Ago}`)
    }
  }

  const other = afk.get(message.author.id)

  if(other){
      afk.delete(message.author.id)

      message.reply(
        `${afk_emoji} Welcome back! Your AFK has been removed`
      );
  }
};
