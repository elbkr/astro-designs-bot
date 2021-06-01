const { prefix } = require("../config.json");
const Discord = require("discord.js");

module.exports = async (message, cooldowns) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  let client = message.client;

  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  let p = prefix;

  // mentioned bot
  if (message.content.startsWith(`<@${message.client.user.id}>`)) {
    return message.channel.send(
      `My prefix in this server is \`${p}\`\n\nTo get a list of commands, type \`${p}help\``
    );
  }

  if (!message.content.startsWith(p)) return;

  const args = message.content.substring(p.length).trim().split(" ");
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

 // custom commands
  const cmdModel = require("../models/cmd");

  const ccmds = await cmdModel.findOne({
    Guild: message.guild.id,
    Command: commandName,
  });

  if (ccmds) message.channel.send(ccmds.Response);

  if (!command) return;

  // cooldowns
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;

      function readTime(t) {
        let s = t % 60;
        t -= s;
        let m = (t / 60) % 60;
        t -= m * 60;
        let h = (t / 3600) % 24;

        if (m <= 0) {
          return `${s} seconds`;
        } else if (h <= 0) {
          return `${m} min`;
        } else {
          return `${h}h`;
        }
      }
      const tleft1 = Math.round(timeLeft.toFixed(3));
      let tleft = readTime(tleft1);

      return message.channel
        .send(`Please wait ${tleft} before using \`${command.name}\` again.`)
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(client, message, args, cooldowns);
  } catch (error) {
    console.error(error);
    message.channel
      .send("There was an error executing that command.")
      .then((msg) => {
        msg.delete({ timeout: 5000 });
      })
      .catch(console.error);
  }
};
