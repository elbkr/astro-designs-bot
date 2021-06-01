const reqEvent = (event) => require(`../events/${event}`);
const Discord = require("discord.js");

module.exports = (client) => {
  const cooldowns = new Discord.Collection();

  client.on("ready", () => reqEvent("ready")(client));
  client.on("message", (m) => reqEvent("message")(m, cooldowns));
  client.on("message", reqEvent("afk"));
  
  // warnings and errors
  client.on("warn", (info) => console.log(info));
  client.on("error", console.error);
  client.on("unhandledRejection", console.error);
};
